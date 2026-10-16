import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  globalSynth,
  NOTES,
  PRESET_PATTERNS,
  WaveformType,
} from "./SynthEngine";
import { OscilloscopeScreen } from "./OscilloscopeScreen";

type TabMode = "instrument" | "sequencer" | "architecture";

export default function SynthConsole() {
  const [activeTab, setActiveTab] = useState<TabMode>("instrument");
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [activeFreq, setActiveFreq] = useState<number | null>(null);
  const [isSequencing, setIsSequencing] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [patternIndex, setPatternIndex] = useState<number>(0);
  const [waveform, setWaveform] = useState<WaveformType>("triangle");
  const [cutoff, setCutoff] = useState<number>(2400);
  const [resonance, setResonance] = useState<number>(3.5);
  const [volume, setVolume] = useState<number>(0.28);
  const [audioEngaged, setAudioEngaged] = useState<boolean>(false);

  // Note clearing timeout ref
  const noteClearTimeoutRef = useRef<number | null>(null);

  const handlePlayNote = useCallback((freq: number, name: string) => {
    setAudioEngaged(true);
    globalSynth.triggerNote(freq, 0.35);
    setActiveNote(name);
    setActiveFreq(freq);

    if (noteClearTimeoutRef.current) {
      window.clearTimeout(noteClearTimeoutRef.current);
    }
    noteClearTimeoutRef.current = window.setTimeout(() => {
      setActiveNote(null);
      setActiveFreq(null);
    }, 380);
  }, []);

  // Sequencer step callback
  const handleSequencerStep = useCallback(
    (step: number, noteIdx: number) => {
      setCurrentStep(step);
      if (step >= 0 && noteIdx >= 0 && noteIdx < NOTES.length) {
        setActiveNote(NOTES[noteIdx].name);
        setActiveFreq(NOTES[noteIdx].freq);
      } else {
        setActiveNote(null);
        setActiveFreq(null);
      }
    },
    []
  );

  const toggleSequencer = useCallback(() => {
    setAudioEngaged(true);
    const running = globalSynth.toggleSequencer(handleSequencerStep);
    setIsSequencing(running);
    if (!running) {
      setCurrentStep(-1);
      setActiveNote(null);
      setActiveFreq(null);
    }
  }, [handleSequencerStep]);

  const selectPattern = (idx: number) => {
    setPatternIndex(idx);
    globalSynth.setPattern(idx);
  };

  const handleWaveformChange = (type: WaveformType) => {
    setWaveform(type);
    globalSynth.setWaveform(type);
  };

  const handleCutoffChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setCutoff(val);
    globalSynth.setCutoff(val);
  };

  const handleResonanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setResonance(val);
    globalSynth.setResonance(val);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    globalSynth.setVolume(val);
  };

  // Keyboard shortcut support (1-8 keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const keyIndex = parseInt(e.key, 10) - 1;
      if (keyIndex >= 0 && keyIndex < NOTES.length) {
        e.preventDefault();
        const note = NOTES[keyIndex];
        handlePlayNote(note.freq, note.name);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePlayNote]);

  // Cleanup sequencer on unmount
  useEffect(() => {
    return () => {
      globalSynth.stopSequencer();
    };
  }, []);

  return (
    <section
      aria-label="Interactive Algorithmic Synthesizer Console"
      className="my-8 w-full"
    >
      {/* Outer Machined Chassis (Double-Bezel Design) */}
      <div className="p-1.5 sm:p-2.5 rounded-[1.75rem] bg-[#f0eee9] dark:bg-[#1a1714] border border-[#dedede] dark:border-[#2b2722] shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-colors duration-200">
        {/* Inner Console Faceplate */}
        <div className="rounded-[calc(1.75rem-0.375rem)] bg-[#ffffff] dark:bg-[#12100e] border border-[#eaeaea] dark:border-[#24211d] p-4 sm:p-6 transition-colors duration-200">
          {/* Hardware Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#eaeaea] dark:border-[#24211d]">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isSequencing ? "bg-amber-400" : "bg-emerald-400"
                  }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                    isSequencing ? "bg-amber-500" : "bg-emerald-500"
                  }`}
                />
              </span>
              <div>
                <h2 className="font-mono text-xs font-bold tracking-wider text-[#111111] dark:text-[#f4f1ea] uppercase">
                  MODEL CH-01 // ALGORITHMIC SYNTHESIZER
                </h2>
                <p className="font-mono text-[10px] text-[#756e62] dark:text-[#a1998b]">
                  {audioEngaged
                    ? isSequencing
                      ? "SEQ_AUTO // 120 BPM LOCK"
                      : "AUDIO ENGINE ACTIVE // 48kHz"
                    : "STANDBY // TAP ANY KEY TO ENGAGE"}
                </p>
              </div>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-lg bg-[#f7f6f3] dark:bg-[#1a1815] border border-[#eaeaea] dark:border-[#2b2722] text-xs font-mono">
              <button
                type="button"
                onClick={() => setActiveTab("instrument")}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === "instrument"
                    ? "bg-[#ffffff] dark:bg-[#25221c] text-[#111111] dark:text-[#ffffff] font-semibold shadow-xs"
                    : "text-[#756e62] dark:text-[#a1998b] hover:text-[#111111] dark:hover:text-[#ffffff]"
                }`}
              >
                TOUCH KEYS
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("sequencer")}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === "sequencer"
                    ? "bg-[#ffffff] dark:bg-[#25221c] text-[#111111] dark:text-[#ffffff] font-semibold shadow-xs"
                    : "text-[#756e62] dark:text-[#a1998b] hover:text-[#111111] dark:hover:text-[#ffffff]"
                }`}
              >
                SEQUENCER
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("architecture")}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === "architecture"
                    ? "bg-[#ffffff] dark:bg-[#25221c] text-[#111111] dark:text-[#ffffff] font-semibold shadow-xs"
                    : "text-[#756e62] dark:text-[#a1998b] hover:text-[#111111] dark:hover:text-[#ffffff]"
                }`}
              >
                DSP ARCHITECTURE
              </button>
            </div>
          </div>

          {/* CRT Vector Scope Visualizer */}
          <OscilloscopeScreen
            engine={globalSynth}
            activeNote={activeNote}
            activeFrequency={activeFreq}
            isSequencing={isSequencing}
          />

          {/* Tab 1: Playable Touch Keyboard */}
          {activeTab === "instrument" && (
            <div className="mt-5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] text-[#756e62] dark:text-[#a1998b] tracking-wider uppercase">
                  POLYPHONIC KEY BED (TAP OR PRESS 1-8)
                </span>
                <span className="font-mono text-[10px] text-[#756e62] dark:text-[#8a8376]">
                  HOTKEYS: [1] ... [8]
                </span>
              </div>

              {/* 8 Playable Piano/Synth Keys */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {NOTES.map((note) => {
                  const isCurrent = activeNote === note.name;
                  return (
                    <button
                      key={note.name}
                      type="button"
                      onClick={() => handlePlayNote(note.freq, note.name)}
                      className={`relative flex flex-col items-center justify-between py-4 px-2 rounded-xl border transition-all duration-100 select-none ${
                        isCurrent
                          ? "bg-amber-500 border-amber-400 text-[#0c0b0a] shadow-[0_0_15px_rgba(245,158,11,0.4)] translate-y-0.5"
                          : "bg-[#fcfbf9] dark:bg-[#171512] border-[#eaeaea] dark:border-[#2b2722] text-[#111111] dark:text-[#f4f1ea] hover:border-amber-400/50 hover:bg-amber-500/5 dark:hover:bg-amber-500/10 active:translate-y-0.5"
                      }`}
                      aria-label={`Play note ${note.name} at ${note.freq} Hertz`}
                    >
                      <span className="font-mono text-[10px] opacity-60">
                        [{note.keyLabel}]
                      </span>
                      <span className="font-bold text-base my-1 font-mono">
                        {note.name}
                      </span>
                      <span className="font-mono text-[9px] opacity-70">
                        {Math.round(note.freq)}Hz
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 2: Algorithmic Step Sequencer */}
          {activeTab === "sequencer" && (
            <div className="mt-5 animate-in fade-in duration-150">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleSequencer}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold transition-all shadow-sm ${
                      isSequencing
                        ? "bg-amber-500 hover:bg-amber-600 text-[#0c0b0a] shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                        : "bg-[#111111] hover:bg-[#2b2722] text-white dark:bg-[#f4f1ea] dark:text-[#111111] dark:hover:bg-white"
                    }`}
                  >
                    <span>{isSequencing ? "■ STOP SEQUENCE" : "▶ RUN SEQUENCE"}</span>
                  </button>

                  <span className="font-mono text-xs text-[#756e62] dark:text-[#a1998b]">
                    {PRESET_PATTERNS[patternIndex].bpm} BPM
                  </span>
                </div>

                {/* Pattern Selector */}
                <div className="flex items-center gap-1 font-mono text-xs">
                  {PRESET_PATTERNS.map((p, idx) => (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => selectPattern(idx)}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        patternIndex === idx
                          ? "bg-amber-500/20 text-amber-700 dark:text-amber-400 font-bold border border-amber-500/30"
                          : "text-[#756e62] dark:text-[#a1998b] hover:text-[#111111] dark:hover:text-[#ffffff]"
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 8-Step Progress LEDs */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 sm:gap-2 py-2">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((step) => {
                  const isStepActive = currentStep === step;
                  const pattern = PRESET_PATTERNS[patternIndex];
                  const noteIdx = pattern.notes[step];
                  const noteName = noteIdx >= 0 ? NOTES[noteIdx].name : "--";

                  return (
                    <div
                      key={step}
                      className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all duration-75 ${
                        isStepActive
                          ? "bg-amber-500 border-amber-400 text-[#0c0b0a] shadow-[0_0_12px_rgba(245,158,11,0.5)] scale-105"
                          : "bg-[#fcfbf9] dark:bg-[#171512] border-[#eaeaea] dark:border-[#2b2722] text-[#756e62] dark:text-[#a1998b]"
                      }`}
                    >
                      <span className="font-mono text-[9px] opacity-75">
                        0{step + 1}
                      </span>
                      <span className="font-mono text-xs font-bold mt-0.5">
                        {noteName}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="mt-2 text-xs text-[#756e62] dark:text-[#a1998b] font-mono">
                {PRESET_PATTERNS[patternIndex].description}
              </p>
            </div>
          )}

          {/* Tab 3: DSP & Systems Architecture */}
          {activeTab === "architecture" && (
            <div className="mt-5 space-y-4 font-mono text-xs animate-in fade-in duration-150">
              <div className="p-4 rounded-xl bg-[#f7f6f3] dark:bg-[#171512] border border-[#eaeaea] dark:border-[#2b2722] text-[#5a5a57] dark:text-[#b5af9f] space-y-2">
                <div className="flex items-center justify-between text-[#111111] dark:text-[#f4f1ea] font-bold">
                  <span>SIGNAL TOPOLOGY & WEB AUDIO ROUTING</span>
                  <span className="text-emerald-500">ZERO_DROP_SCHEDULER</span>
                </div>
                <div className="p-2.5 rounded bg-[#ffffff] dark:bg-[#0c0b0a] border border-[#eaeaea] dark:border-[#24211d] overflow-x-auto text-[11px] text-amber-700 dark:text-amber-400">
                  DualOsc(Lead + Sub) ➔ ResonantBiquadFilter ➔ DynamicsCompressor ➔ MasterGain ➔ AnalyserNode ➔ AudioDestination
                </div>
                <p className="text-[11px] leading-relaxed">
                  <strong>Why this demonstrates core competence:</strong> Built using zero-garbage voice recycling and a Web Audio lookahead scheduling loop running ahead of the UI event loop. Just like building high-concurrency payment streams at <strong>Tikkie</strong>, real-time audio requires absolute jitter-free execution and state determinism.
                </p>
              </div>
            </div>
          )}

          {/* Analog Tone Controls Strip */}
          <div className="mt-6 pt-5 border-t border-[#eaeaea] dark:border-[#24211d] grid grid-cols-2 sm:grid-cols-4 gap-4 select-none">
            {/* Waveform Selector */}
            <div>
              <label className="block font-mono text-[10px] text-[#756e62] dark:text-[#a1998b] uppercase tracking-wider mb-1.5">
                Waveform
              </label>
              <div className="grid grid-cols-2 gap-1 font-mono text-[10px]">
                {(["triangle", "sawtooth", "square", "sine"] as WaveformType[]).map(
                  (wave) => (
                    <button
                      key={wave}
                      type="button"
                      onClick={() => handleWaveformChange(wave)}
                      className={`px-1.5 py-1 rounded capitalize transition-colors ${
                        waveform === wave
                          ? "bg-amber-500 text-[#0c0b0a] font-bold"
                          : "bg-[#f7f6f3] dark:bg-[#1a1815] text-[#756e62] dark:text-[#a1998b] hover:text-[#111111] dark:hover:text-[#ffffff]"
                      }`}
                    >
                      {wave.slice(0, 3)}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Filter Cutoff */}
            <div>
              <div className="flex justify-between font-mono text-[10px] text-[#756e62] dark:text-[#a1998b] uppercase tracking-wider mb-1.5">
                <span>Cutoff</span>
                <span>{Math.round(cutoff)}Hz</span>
              </div>
              <input
                type="range"
                min="200"
                max="8000"
                step="50"
                value={cutoff}
                onChange={handleCutoffChange}
                className="w-full accent-amber-500 cursor-pointer"
                aria-label="Filter cutoff frequency in Hertz"
              />
            </div>

            {/* Resonance Q */}
            <div>
              <div className="flex justify-between font-mono text-[10px] text-[#756e62] dark:text-[#a1998b] uppercase tracking-wider mb-1.5">
                <span>Resonance</span>
                <span>Q {resonance.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="12"
                step="0.5"
                value={resonance}
                onChange={handleResonanceChange}
                className="w-full accent-amber-500 cursor-pointer"
                aria-label="Filter resonance Q factor"
              />
            </div>

            {/* Master Volume */}
            <div>
              <div className="flex justify-between font-mono text-[10px] text-[#756e62] dark:text-[#a1998b] uppercase tracking-wider mb-1.5">
                <span>Volume</span>
                <span>{Math.round(volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="0.8"
                step="0.02"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full accent-amber-500 cursor-pointer"
                aria-label="Console master volume"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
