import { useEffect, useRef, FC } from "react";
import { SynthEngine } from "./SynthEngine";

interface OscilloscopeScreenProps {
  engine: SynthEngine;
  activeNote: string | null;
  activeFrequency: number | null;
  isSequencing: boolean;
}

export const OscilloscopeScreen: FC<OscilloscopeScreenProps> = ({
  engine,
  activeNote,
  activeFrequency,
  isSequencing,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const phaseRef = useRef(0);
  const dataArrayRef = useRef<Uint8Array<ArrayBuffer> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let running = true;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      if (!running) return;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // CRT screen persistence fade
      ctx.fillStyle = "rgba(10, 14, 12, 0.28)";
      ctx.fillRect(0, 0, width, height);

      // Fine CRT grid reticle
      ctx.strokeStyle = "rgba(34, 197, 94, 0.08)";
      ctx.lineWidth = 1;

      // Vertical center line & crosshairs
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);

      // Subtle horizontal divisions
      for (let y = height * 0.25; y < height; y += height * 0.25) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Read audio waveform from Web Audio Analyser
      const analyser = engine.getAnalyser();
      let hasSignal = false;

      if (analyser) {
        const bufferLength = analyser.frequencyBinCount;
        if (!dataArrayRef.current || dataArrayRef.current.length !== bufferLength) {
          dataArrayRef.current = new Uint8Array(bufferLength);
        }
        analyser.getByteTimeDomainData(dataArrayRef.current);

        // Check if there is actual audio energy
        for (let i = 0; i < bufferLength; i += 8) {
          if (Math.abs(dataArrayRef.current[i] - 128) > 3) {
            hasSignal = true;
            break;
          }
        }
      }

      ctx.save();
      // Phosphor green / amber vector glow
      ctx.strokeStyle = hasSignal ? "#10b981" : "#f59e0b";
      ctx.shadowColor = hasSignal ? "#10b981" : "#f59e0b";
      ctx.shadowBlur = hasSignal ? 10 : 6;
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.beginPath();

      if (hasSignal && dataArrayRef.current && analyser) {
        const bufferLength = analyser.frequencyBinCount;
        const sliceWidth = width / bufferLength;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const v = dataArrayRef.current[i] / 128.0;
          const y = (v * height) / 2;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          x += sliceWidth;
        }
      } else {
        // Idle state: Draw an organic harmonic Lissajous / sine wave
        phaseRef.current += 0.035;
        const points = 120;
        const step = width / points;

        for (let i = 0; i <= points; i++) {
          const x = i * step;
          const normX = x / width;
          const env = Math.sin(normX * Math.PI); // Window to zero at edges
          const f1 = Math.sin(normX * Math.PI * 4 + phaseRef.current);
          const f2 = Math.sin(normX * Math.PI * 8 - phaseRef.current * 0.7);
          const y = height / 2 + (f1 * 12 + f2 * 4) * env;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
      }

      ctx.stroke();
      ctx.restore();

      // CRT Scanline raster effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      for (let y = 0; y < height; y += 3) {
        ctx.fillRect(0, y, width, 1);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [engine]);

  return (
    <div className="relative w-full h-32 sm:h-36 rounded-lg overflow-hidden bg-[#0a0e0c] border border-[#223328] shadow-inner select-none">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="w-full h-full block"
      />

      {/* Screen Glass Bezel Reflection */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />

      {/* Vector HUD Telemetry Readouts */}
      <div className="absolute top-2 left-3 flex items-center gap-2 font-mono text-[10px] tracking-wider text-emerald-400/90 pointer-events-none">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>VECTOR_SCOPE // 48kHz</span>
      </div>

      <div className="absolute top-2 right-3 font-mono text-[10px] tracking-wider text-emerald-400/80 pointer-events-none">
        {isSequencing ? "SEQ_AUTO" : "MANUAL_TOUCH"}
      </div>

      <div className="absolute bottom-2 left-3 flex items-center gap-3 font-mono text-[10px] tracking-wider text-emerald-400/80 pointer-events-none">
        <div>
          FREQ:{" "}
          <span className="text-emerald-300 font-bold">
            {activeFrequency ? `${activeFrequency.toFixed(1)} Hz` : "IDLE"}
          </span>
        </div>
        <div>
          NOTE:{" "}
          <span className="text-emerald-300 font-bold">
            {activeNote || "--"}
          </span>
        </div>
      </div>

      <div className="absolute bottom-2 right-3 font-mono text-[10px] text-emerald-500/60 pointer-events-none">
        LPF {Math.round(engine.cutoff)}Hz // Q {engine.resonance.toFixed(1)}
      </div>
    </div>
  );
};
