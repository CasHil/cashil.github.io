import React, { createContext, useContext, useEffect, useRef, useState } from "react";

interface AudioContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  analyserNode: AnalyserNode | null;
}

const BackgroundAudioContext = createContext<AudioContextType | undefined>(
  undefined
);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const nodesRef = useRef<{
    osc1: OscillatorNode;
    osc2: OscillatorNode;
    subOsc: OscillatorNode;
    filter: BiquadFilterNode;
    lfo: OscillatorNode;
    lfoGain: GainNode;
  } | null>(null);

  const startSynth = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Analyser for real-time oscilloscope visualization
      if (!analyserRef.current) {
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.85;
        analyserRef.current = analyser;
      }

      // Master gain node
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      // Soft fade in to gentle background volume
      masterGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1.2);
      gainNodeRef.current = masterGain;

      // Warm analog low-pass filter
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, ctx.currentTime);
      filter.Q.setValueAtTime(1.5, ctx.currentTime);

      // Slow LFO for filter breathing
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.08, ctx.currentTime); // Very slow cycle
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(120, ctx.currentTime);
      lfo.connect(filter.frequency);
      lfo.start();

      // Ambient Oscillators (warm, meditative fifth chord: C3 + G3 + soft sub)
      const osc1 = ctx.createOscillator();
      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(130.81, ctx.currentTime); // C3

      const osc2 = ctx.createOscillator();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(196.0, ctx.currentTime); // G3
      osc2.detune.setValueAtTime(4, ctx.currentTime); // slight analog chorus

      const subOsc = ctx.createOscillator();
      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(65.41, ctx.currentTime); // C2 sub-bass

      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.5, ctx.currentTime);

      osc1.connect(filter);
      osc2.connect(filter);
      subOsc.connect(filter);

      filter.connect(masterGain);
      masterGain.connect(analyserRef.current);
      analyserRef.current.connect(ctx.destination);

      osc1.start();
      osc2.start();
      subOsc.start();

      nodesRef.current = { osc1, osc2, subOsc, filter, lfo, lfoGain };
    } catch {
      // AudioContext unavailable in environment
    }
  };

  const stopSynth = () => {
    try {
      const ctx = audioCtxRef.current;
      const masterGain = gainNodeRef.current;

      if (ctx && masterGain) {
        // Soft fade out
        masterGain.gain.setValueAtTime(masterGain.gain.value, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(
          0.00001,
          ctx.currentTime + 0.6
        );

        setTimeout(() => {
          if (nodesRef.current) {
            try {
              nodesRef.current.osc1.stop();
              nodesRef.current.osc2.stop();
              nodesRef.current.subOsc.stop();
              nodesRef.current.lfo.stop();
            } catch {
              // Already stopped
            }
            nodesRef.current = null;
          }
        }, 700);
      }
    } catch {
      // Ignore cleanup error
    }
  };

  const toggleSound = () => {
    if (!soundEnabled) {
      startSynth();
      setSoundEnabled(true);
    } else {
      stopSynth();
      setSoundEnabled(false);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopSynth();
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <BackgroundAudioContext.Provider
      value={{
        soundEnabled,
        toggleSound,
        analyserNode: analyserRef.current,
      }}
    >
      {children}
    </BackgroundAudioContext.Provider>
  );
};

export const useBackgroundAudio = () => {
  const context = useContext(BackgroundAudioContext);
  if (!context) {
    throw new Error(
      "useBackgroundAudio must be used within an AudioProvider"
    );
  }
  return context;
};
