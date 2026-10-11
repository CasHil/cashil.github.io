import { useEffect, useRef, useState } from "react";

interface Note {
  name: string;
  freq: number;
}

const NOTES: Note[] = [
  { name: "C4", freq: 261.63 },
  { name: "D4", freq: 293.66 },
  { name: "E4", freq: 329.63 },
  { name: "G4", freq: 392.0 },
  { name: "A4", freq: 440.0 },
  { name: "C5", freq: 523.25 },
];

export default function SynthOscilloscope() {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [activeFreq, setActiveFreq] = useState<number>(440.0);
  const [srAnnouncement, setSrAnnouncement] = useState("");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const phaseRef = useRef(0);
  const amplitudeRef = useRef(15);
  const targetAmplitudeRef = useRef(15);

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playNote = (note: Note) => {
    setActiveNote(note.name);
    setActiveFreq(note.freq);
    targetAmplitudeRef.current = 45;
    setSrAnnouncement(
      `Playing note ${note.name} at ${Math.round(note.freq)} Hertz`
    );

    // Reset amplitude decay
    setTimeout(() => {
      targetAmplitudeRef.current = 15;
      setActiveNote(null);
    }, 400);

    if (!audioEnabled) return;

    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Warm analog triangle synth
      osc.type = "triangle";
      osc.frequency.setValueAtTime(note.freq, ctx.currentTime);

      // Low pass filter for soft analog warmth
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1400, ctx.currentTime);

      // Soft envelope
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.65);
    } catch {
      // AudioContext error safeguard
    }
  };

  const toggleAudio = () => {
    if (!audioEnabled) {
      getAudioContext();
      setAudioEnabled(true);
      setSrAnnouncement("Synthesizer audio enabled");
    } else {
      setAudioEnabled(false);
      setSrAnnouncement("Synthesizer audio disabled");
    }
  };

  // Oscilloscope Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const drawWaveform = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Center baseline guide
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 240, 220, 0.07)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Oscilloscope waveform
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = activeNote ? "#f59e0b" : "#a1998b";

      const frequencyFactor = activeFreq / 200;

      for (let x = 0; x < width; x++) {
        const normalizedX = x / width;
        // Window function so edges taper to zero
        const windowEnvelope = Math.sin(normalizedX * Math.PI);
        const y =
          centerY +
          Math.sin(
            normalizedX * Math.PI * 4 * frequencyFactor + phaseRef.current
          ) *
            amplitudeRef.current *
            windowEnvelope +
          Math.sin(normalizedX * Math.PI * 8 + phaseRef.current * 1.5) *
            (amplitudeRef.current * 0.25) *
            windowEnvelope;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    };

    if (prefersReducedMotion) {
      amplitudeRef.current = activeNote ? 40 : 15;
      drawWaveform();
      return;
    }

    let running = true;

    const render = () => {
      if (!running) return;

      // Smooth amplitude easing
      amplitudeRef.current +=
        (targetAmplitudeRef.current - amplitudeRef.current) * 0.1;
      phaseRef.current += 0.04;

      drawWaveform();

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      running = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [activeFreq, activeNote]);

  return (
    <div className="rounded-2xl p-4 sm:p-5 bg-[#141210]/90 border border-[#2b2722] shadow-xl my-6">
      {/* Screen reader live region */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {srAnnouncement}
      </div>

      {/* Module Header / Console Metas */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#2b2722] text-xs font-mono text-[#a1998b]">
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse motion-reduce:animate-none"
            aria-hidden="true"
          />
          <span className="font-bold text-[#e6e2d8] tracking-wider uppercase">
            MODULAR HARMONICS // OSC-01
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span aria-label={`Current frequency ${activeFreq.toFixed(1)} Hertz`}>
            {activeFreq.toFixed(1)} Hz
          </span>
          <span aria-hidden="true">•</span>
          <button
            type="button"
            onClick={toggleAudio}
            aria-pressed={audioEnabled}
            aria-label={
              audioEnabled
                ? "Synthesizer audio is active. Press to mute audio output."
                : "Synthesizer audio is muted. Press to enable audio output."
            }
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141210] ${
              audioEnabled
                ? "bg-amber-500 text-stone-950 shadow-sm shadow-amber-500/30"
                : "bg-[#24211d] text-[#c7c1b5] hover:text-[#f4f1ea] border border-[#38342e]"
            }`}
          >
            {audioEnabled ? "AUDIO [ON]" : "AUDIO [OFF]"}
          </button>
        </div>
      </div>

      {/* Real-time Oscilloscope Screen */}
      <div className="relative rounded-lg bg-[#0c0b0a] border border-[#2b2722] p-2 overflow-hidden mb-3">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Real-time audio waveform visualizer"
          width={560}
          height={80}
          className="w-full h-16 sm:h-20 block"
        >
          <p>Real-time audio waveform visualizer for synthesizer harmonics.</p>
        </canvas>
        <div
          aria-hidden="true"
          className="absolute top-2 left-2 text-[10px] font-mono text-stone-600 pointer-events-none"
        >
          WAVEFORM: PENTATONIC SINE/TRI
        </div>
        <div
          aria-hidden="true"
          className="absolute bottom-2 right-2 text-[10px] font-mono text-stone-600 pointer-events-none"
        >
          44.1 kHz • 24-BIT
        </div>
      </div>

      {/* Tactile Synth Ribbon Keys */}
      <div
        role="group"
        aria-label="Synthesizer keyboard notes"
        className="flex items-center justify-between gap-1.5 sm:gap-2"
      >
        {NOTES.map((note) => {
          const isActive = activeNote === note.name;
          return (
            <button
              key={note.name}
              type="button"
              onClick={() => playNote(note)}
              aria-label={`Play note ${note.name}, ${Math.round(note.freq)} Hertz`}
              aria-pressed={isActive}
              className={`flex-1 py-2 sm:py-2.5 px-1 rounded-lg text-xs font-mono font-bold transition-[background-color,color,border-color,box-shadow,transform] duration-150 motion-reduce:transform-none text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141210] ${
                isActive
                  ? "bg-amber-500 text-stone-950 scale-95 shadow-md shadow-amber-500/20"
                  : "bg-[#1b1916] text-[#c7c1b5] hover:bg-[#24211d] hover:text-amber-400 border border-[#2b2722]"
              }`}
            >
              <div>{note.name}</div>
              <div
                aria-hidden="true"
                className="text-[10px] text-stone-500 font-normal hidden sm:block"
              >
                {Math.round(note.freq)}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
