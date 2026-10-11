import { useEffect, useRef } from "react";
import { useBackgroundAudio } from "../../context/AudioContext";
import { useTheme } from "../../context/ThemeContext";

export default function BackgroundSynth() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { soundEnabled, analyserNode } = useBackgroundAudio();
  const { theme } = useTheme();

  const animationFrameRef = useRef<number | null>(null);
  const phaseRef = useRef(0);
  const timeDataRef = useRef<Uint8Array<ArrayBuffer> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let running = true;

    // Handle high-DPI screens & viewport sizing
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const isDark = theme === "dark";

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const centerY = height * 0.72; // Sits calmly in the lower-middle backdrop

      ctx.clearRect(0, 0, width, height);

      // Colors calibrated to match editorial studio dark & light themes
      const primaryStroke = isDark
        ? soundEnabled
          ? "rgba(245, 158, 11, 0.28)" // Amber glow when sound is playing
          : "rgba(244, 241, 234, 0.09)" // Subtle bone wave in dark mode
        : soundEnabled
        ? "rgba(180, 115, 20, 0.25)"
        : "rgba(30, 30, 28, 0.07)"; // Subtle charcoal wave in light mode

      const harmonicStroke = isDark
        ? "rgba(245, 158, 11, 0.05)"
        : "rgba(180, 140, 60, 0.05)";

      // Primary Wave
      ctx.beginPath();
      ctx.lineWidth = soundEnabled ? 1.75 : 1.25;
      ctx.strokeStyle = primaryStroke;

      // Secondary Harmonic Wave
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = harmonicStroke;

      const bufferLength = analyserNode?.frequencyBinCount || 0;
      if (soundEnabled && analyserNode && bufferLength > 0) {
        if (!timeDataRef.current || timeDataRef.current.length !== bufferLength) {
          timeDataRef.current = new Uint8Array(bufferLength);
        }
        analyserNode.getByteTimeDomainData(timeDataRef.current);
      }

      const points = 180;
      const step = width / points;

      // Draw layered harmonic wave
      ctx.beginPath();
      ctx.strokeStyle = primaryStroke;
      ctx.lineWidth = soundEnabled ? 1.5 : 1;

      for (let i = 0; i <= points; i++) {
        const x = i * step;
        const normalizedX = x / width;

        // Window envelope so wave tapers gently towards screen edges
        const envelope = Math.sin(normalizedX * Math.PI);

        let waveOffset = 0;

        if (soundEnabled && timeDataRef.current && bufferLength > 0) {
          const dataIndex = Math.floor(
            (i / points) * (timeDataRef.current.length - 1)
          );
          const v = (timeDataRef.current[dataIndex] - 128) / 128; // -1 to 1
          waveOffset = v * 40 * envelope;
        } else {
          // Ambient procedural synthesizer waveform (analog sine + 3rd harmonic)
          const f1 = Math.sin(normalizedX * Math.PI * 3 + phaseRef.current);
          const f2 = Math.sin(
            normalizedX * Math.PI * 6 - phaseRef.current * 0.7
          );
          waveOffset = (f1 * 18 + f2 * 6) * envelope;
        }

        const y = centerY + waveOffset;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Delicate ghost harmonic layer
      ctx.beginPath();
      ctx.strokeStyle = harmonicStroke;
      ctx.lineWidth = 1;

      for (let i = 0; i <= points; i++) {
        const x = i * step;
        const normalizedX = x / width;
        const envelope = Math.sin(normalizedX * Math.PI);

        const f3 = Math.sin(
          normalizedX * Math.PI * 5 + phaseRef.current * 1.3
        );
        const y = centerY + f3 * 10 * envelope;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    };

    if (prefersReducedMotion) {
      draw();
      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }

    const renderLoop = () => {
      if (!running) return;

      phaseRef.current += soundEnabled ? 0.035 : 0.015;
      draw();

      animationFrameRef.current = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      running = false;
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [soundEnabled, analyserNode, theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
