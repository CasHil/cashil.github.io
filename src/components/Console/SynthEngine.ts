// High-performance Web Audio API Synthesizer & Sequencer Engine for Casper Hildebrand's Portfolio
// Implements dual-oscillator subtractive synthesis, resonant biquad filtering, soft-limiting,
// and zero-drift lookahead step sequencing.

export type WaveformType = "triangle" | "sawtooth" | "square" | "sine";

export interface NoteDefinition {
  name: string;
  freq: number;
  keyLabel: string;
}

export const NOTES: NoteDefinition[] = [
  { name: "C4", freq: 261.63, keyLabel: "1" },
  { name: "D4", freq: 293.66, keyLabel: "2" },
  { name: "E4", freq: 329.63, keyLabel: "3" },
  { name: "F4", freq: 349.23, keyLabel: "4" },
  { name: "G4", freq: 392.0, keyLabel: "5" },
  { name: "A4", freq: 440.0, keyLabel: "6" },
  { name: "B4", freq: 493.88, keyLabel: "7" },
  { name: "C5", freq: 523.25, keyLabel: "8" },
];

export interface SequencePattern {
  name: string;
  notes: number[]; // indices into NOTES array (-1 for rest)
  bpm: number;
  description: string;
}

export const PRESET_PATTERNS: SequencePattern[] = [
  {
    name: "Pentatonic Drift",
    notes: [0, 2, 4, 5, 7, 5, 4, 2],
    bpm: 116,
    description: "Harmonic mathematical pentatonic arpeggio with resonant decay.",
  },
  {
    name: "Tikkie Pulse",
    notes: [0, 0, 4, 0, 7, 4, 0, 2],
    bpm: 124,
    description: "Punchy, driving groove modeling high-concurrency event loops.",
  },
  {
    name: "Fibonacci Spiral",
    notes: [0, 1, 2, 4, 7, 4, 2, 1],
    bpm: 108,
    description: "Non-linear golden-ratio step intervals with subtle filter modulation.",
  },
];

export class SynthEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private compressor: DynamicsCompressorNode | null = null;
  private analyser: AnalyserNode | null = null;

  // Synthesis parameters
  public waveform: WaveformType = "triangle";
  public cutoff: number = 2400; // Hz
  public resonance: number = 3.5; // Q
  public attack: number = 0.015; // sec
  public release: number = 0.35; // sec
  public volume: number = 0.28;

  // Sequencer state
  private isSequencerRunning: boolean = false;
  private currentPatternIndex: number = 0;
  private currentStep: number = 0;
  private nextNoteTime: number = 0;
  private timerId: number | null = null;
  private onStepCallback: ((step: number, noteIndex: number) => void) | null = null;

  constructor() {
    // Lazy initialization on first user interaction
  }

  private initAudio() {
    if (this.ctx) {
      if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }
      return;
    }

    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;

      if (!AudioCtx) return;

      this.ctx = new AudioCtx();

      // Master Compressor / Limiter (protects ears & gives analog saturation)
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-18, this.ctx.currentTime);
      this.compressor.knee.setValueAtTime(24, this.ctx.currentTime);
      this.compressor.ratio.setValueAtTime(8, this.ctx.currentTime);
      this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
      this.compressor.release.setValueAtTime(0.25, this.ctx.currentTime);

      // Resonant Lowpass Filter (analog ladder model)
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = "lowpass";
      this.filter.frequency.setValueAtTime(this.cutoff, this.ctx.currentTime);
      this.filter.Q.setValueAtTime(this.resonance, this.ctx.currentTime);

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);

      // Analyser for CRT Oscilloscope
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 512;
      this.analyser.smoothingTimeConstant = 0.8;

      // Audio Graph routing: Filter -> Compressor -> Master Gain -> Analyser -> Output
      this.filter.connect(this.compressor);
      this.compressor.connect(this.masterGain);
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    } catch {
      // AudioContext not available in current environment
    }
  }

  public getAnalyser(): AnalyserNode | null {
    this.initAudio();
    return this.analyser;
  }

  public setCutoff(freqHz: number) {
    this.cutoff = Math.max(150, Math.min(10000, freqHz));
    if (this.filter && this.ctx) {
      this.filter.frequency.setTargetAtTime(this.cutoff, this.ctx.currentTime, 0.03);
    }
  }

  public setResonance(q: number) {
    this.resonance = Math.max(0.1, Math.min(14, q));
    if (this.filter && this.ctx) {
      this.filter.Q.setTargetAtTime(this.resonance, this.ctx.currentTime, 0.03);
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.03);
    }
  }

  public setWaveform(wave: WaveformType) {
    this.waveform = wave;
  }

  public triggerNote(freq: number, durationSec: number = 0.3) {
    this.initAudio();
    if (!this.ctx || !this.filter) return;

    const ctx = this.ctx;
    const now = ctx.currentTime;

    // Dual-oscillator architecture (lead osc + slightly detuned sub/warmth)
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const voiceGain = ctx.createGain();

    osc1.type = this.waveform;
    osc1.frequency.setValueAtTime(freq, now);

    osc2.type = "sine";
    // Sub-oscillator octave lower with subtle 3-cent detune for analog warmth
    osc2.frequency.setValueAtTime(freq * 0.5, now);
    osc2.detune.setValueAtTime(3.5, now);

    // Dynamic Filter Envelope (punchy attack bite)
    const filterFreq = Math.min(9000, this.cutoff * 1.6);
    this.filter.frequency.cancelScheduledValues(now);
    this.filter.frequency.setValueAtTime(filterFreq, now);
    this.filter.frequency.exponentialRampToValueAtTime(
      Math.max(160, this.cutoff),
      now + this.attack + 0.12
    );

    // Voice Amplitude Envelope (ADSR)
    voiceGain.gain.setValueAtTime(0.0001, now);
    voiceGain.gain.exponentialRampToValueAtTime(0.65, now + this.attack);
    voiceGain.gain.exponentialRampToValueAtTime(
      0.35,
      now + this.attack + 0.08
    );
    voiceGain.gain.exponentialRampToValueAtTime(
      0.0001,
      now + Math.max(durationSec, this.attack + this.release)
    );

    osc1.connect(voiceGain);
    osc2.connect(voiceGain);
    voiceGain.connect(this.filter);

    osc1.start(now);
    osc2.start(now);

    const stopTime = now + Math.max(durationSec, this.attack + this.release) + 0.05;
    osc1.stop(stopTime);
    osc2.stop(stopTime);

    // Garbage collection node disconnection
    setTimeout(() => {
      try {
        osc1.disconnect();
        osc2.disconnect();
        voiceGain.disconnect();
      } catch {
        // Already disconnected
      }
    }, (stopTime - now) * 1000 + 100);
  }

  // --- Step Sequencer Engine ---
  public startSequencer(onStep: (step: number, noteIndex: number) => void) {
    this.initAudio();
    if (!this.ctx) return;

    this.onStepCallback = onStep;
    this.isSequencerRunning = true;
    this.currentStep = 0;
    this.nextNoteTime = this.ctx.currentTime + 0.05;

    this.scheduler();
  }

  public stopSequencer() {
    this.isSequencerRunning = false;
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.currentStep = 0;
    if (this.onStepCallback) {
      this.onStepCallback(-1, -1);
    }
  }

  public toggleSequencer(onStep: (step: number, noteIndex: number) => void): boolean {
    if (this.isSequencerRunning) {
      this.stopSequencer();
      return false;
    } else {
      this.startSequencer(onStep);
      return true;
    }
  }

  public setPattern(patternIndex: number) {
    if (patternIndex >= 0 && patternIndex < PRESET_PATTERNS.length) {
      this.currentPatternIndex = patternIndex;
    }
  }

  public getPattern(): SequencePattern {
    return PRESET_PATTERNS[this.currentPatternIndex];
  }

  public isRunning(): boolean {
    return this.isSequencerRunning;
  }

  // High-precision lookahead scheduler to eliminate JavaScript UI thread timing jitter
  private scheduler = () => {
    if (!this.isSequencerRunning || !this.ctx) return;

    const pattern = PRESET_PATTERNS[this.currentPatternIndex];
    const secondsPerBeat = 60.0 / pattern.bpm;
    const stepDuration = secondsPerBeat * 0.5; // 8th notes

    // Schedule any notes that fall within the next 100ms window
    while (this.nextNoteTime < this.ctx.currentTime + 0.1) {
      const noteIndex = pattern.notes[this.currentStep];
      if (noteIndex >= 0 && noteIndex < NOTES.length) {
        const note = NOTES[noteIndex];
        this.triggerNote(note.freq, stepDuration * 0.85);
      }

      // Notify UI in sync with playback
      const scheduledStep = this.currentStep;
      const delayMs = Math.max(0, (this.nextNoteTime - this.ctx.currentTime) * 1000);
      setTimeout(() => {
        if (this.isSequencerRunning && this.onStepCallback) {
          this.onStepCallback(scheduledStep, noteIndex);
        }
      }, delayMs);

      this.nextNoteTime += stepDuration;
      this.currentStep = (this.currentStep + 1) % pattern.notes.length;
    }

    this.timerId = window.setTimeout(this.scheduler, 35);
  };
}

// Global singleton instance for immediate responsive reactivity
export const globalSynth = new SynthEngine();
