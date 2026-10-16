import { ReactNode, useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Intro from "../Intro/Intro";
import Education from "../Education/Education";
import WorkExperience from "../WorkExperience/WorkExperience";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useBackgroundAudio } from "../../context/AudioContext";

// Subtle analog voice trigger click when sound is enabled
const playTransientClick = () => {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(320, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.035, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.045);
  } catch {
    // AudioContext blocked or unavailable
  }
};

type ADSRPhase = "attack" | "decay" | "sustain" | "release";

function ADSREnvelopeMonitor({ phase }: { phase: ADSRPhase }) {
  // SVG coordinates: Attack: (4,26)->(22,4), Decay: (22,4)->(42,12), Sustain: (42,12)->(76,12), Release: (76,12)->(96,26)
  const dotCoords: Record<ADSRPhase, { x: number; y: number }> = {
    attack: { x: 22, y: 4 },
    decay: { x: 42, y: 12 },
    sustain: { x: 60, y: 12 },
    release: { x: 96, y: 26 },
  };

  const current = dotCoords[phase];

  return (
    <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#eaeaea] dark:border-[#24211d] font-mono text-[11px] text-[#756e62] dark:text-[#a1998b] select-none">
      {/* Left: Interactive ADSR Waveform Vector */}
      <div className="flex items-center gap-3">
        <div className="relative w-24 h-7 flex items-center">
          <svg
            viewBox="0 0 100 30"
            className="w-full h-full overflow-visible"
            fill="none"
          >
            {/* Background Base Grid Line */}
            <line
              x1="0"
              y1="26"
              x2="100"
              y2="26"
              stroke="currentColor"
              strokeOpacity="0.2"
              strokeWidth="1"
            />
            {/* The ADSR Envelope Line */}
            <path
              d="M 4 26 L 22 4 L 42 12 L 76 12 L 96 26"
              stroke="#f59e0b"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-90"
            />
            {/* Moving Tracer Dot */}
            <motion.circle
              animate={{ cx: current.x, cy: current.y }}
              transition={{
                duration: phase === "attack" ? 0.09 : phase === "decay" ? 0.12 : 0.2,
                ease: "easeOut",
              }}
              r="3"
              fill={phase === "sustain" ? "#10b981" : "#f59e0b"}
              className="drop-shadow-[0_0_6px_#f59e0b]"
            />
          </svg>
        </div>

        {/* 4 Phase Badges */}
        <div className="flex items-center gap-1 text-[10px] tracking-wider">
          <span
            className={`px-1.5 py-0.5 rounded transition-all duration-150 ${
              phase === "attack"
                ? "bg-[#f59e0b] text-[#0c0b0a] font-bold shadow-xs"
                : "text-[#a1998b] dark:text-[#756e62]"
            }`}
          >
            A
          </span>
          <span
            className={`px-1.5 py-0.5 rounded transition-all duration-150 ${
              phase === "decay"
                ? "bg-[#f59e0b] text-[#0c0b0a] font-bold shadow-xs"
                : "text-[#a1998b] dark:text-[#756e62]"
            }`}
          >
            D
          </span>
          <span
            className={`px-1.5 py-0.5 rounded transition-all duration-150 ${
              phase === "sustain"
                ? "bg-[#10b981] text-[#0c0b0a] font-bold shadow-xs"
                : "text-[#a1998b] dark:text-[#756e62]"
            }`}
          >
            S
          </span>
          <span
            className={`px-1.5 py-0.5 rounded transition-all duration-150 ${
              phase === "release"
                ? "bg-[#ef4444] text-[#ffffff] font-bold shadow-xs"
                : "text-[#a1998b] dark:text-[#756e62]"
            }`}
          >
            R
          </span>
        </div>
      </div>

      {/* Right: Telemetry Readout */}
      <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase">
        <span
          className={`inline-block w-1.5 h-1.5 rounded-full ${
            phase === "sustain" ? "bg-[#10b981] animate-pulse" : "bg-[#f59e0b]"
          }`}
        />
        <span className="font-semibold text-[#111111] dark:text-[#f4f1ea]">
          {phase === "sustain"
            ? "VOICE // SUSTAIN [HELD]"
            : phase === "attack"
            ? "VOICE // ATTACK [+GATE]"
            : phase === "decay"
            ? "VOICE // DECAY [SETTLE]"
            : "VOICE // RELEASE [-NOTE]"}
        </span>
      </div>
    </div>
  );
}

export default function Body() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const { soundEnabled } = useBackgroundAudio();
  const prevPathRef = useRef(location.pathname);
  const [phase, setPhase] = useState<ADSRPhase>("sustain");

  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;

      if (soundEnabled) {
        playTransientClick();
      }

      // Drive the ADSR envelope state machine
      setPhase("attack");
      const decayTimer = setTimeout(() => setPhase("decay"), 90);
      const sustainTimer = setTimeout(() => setPhase("sustain"), 220);

      return () => {
        clearTimeout(decayTimer);
        clearTimeout(sustainTimer);
      };
    }
  }, [location.pathname, soundEnabled]);

  const wrapMotionDiv = (element: ReactNode) => {
    if (shouldReduceMotion) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.05 }}
        >
          {element}
        </motion.div>
      );
    }

    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.975,
          y: 8,
          filter: "brightness(1.15) contrast(1.05)",
        }}
        animate={{
          opacity: 1,
          scale: [0.975, 1.012, 1], // Attack peak -> Decay settle -> Sustain
          y: [8, -1, 0],
          filter: "brightness(1) contrast(1)",
        }}
        exit={{
          opacity: 0,
          scale: 0.99,
          y: -4,
          filter: "brightness(0.9)",
          transition: { duration: 0.12, ease: "easeOut" }, // Quick Release
        }}
        transition={{
          duration: 0.24,
          times: [0, 0.45, 1],
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {element}
      </motion.div>
    );
  };

  return (
    <main id="main-content" tabIndex={-1} className="w-full focus:outline-none">
      {/* Visual ADSR Envelope Monitor & Telemetry */}
      <ADSREnvelopeMonitor phase={phase} />

      {/* Animated Route Content with quick exit and punchy entry */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={wrapMotionDiv(<Intro />)} />
          <Route path="/education" element={wrapMotionDiv(<Education />)} />
          <Route
            path="/work-experience"
            element={wrapMotionDiv(<WorkExperience />)}
          />
        </Routes>
      </AnimatePresence>
    </main>
  );
}
