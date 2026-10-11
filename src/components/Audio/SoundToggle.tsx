import { useBackgroundAudio } from "../../context/AudioContext";
import { useTheme } from "../../context/ThemeContext";

interface SoundToggleProps {
  className?: string;
}

export default function SoundToggle({ className = "" }: SoundToggleProps) {
  const { soundEnabled, toggleSound } = useBackgroundAudio();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleSound}
      aria-label={
        soundEnabled
          ? "Ambient synthesizer audio is playing. Press to mute background sound."
          : "Ambient synthesizer audio is muted. Press to play background sound."
      }
      title={soundEnabled ? "Mute ambient audio" : "Play ambient audio"}
      className={`group relative flex items-center gap-2 px-2.5 py-1.5 rounded-md border transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 ${
        soundEnabled
          ? isDark
            ? "bg-[#1f1b14] border-amber-600/40 text-amber-300"
            : "bg-[#fdfaf3] border-amber-500/40 text-amber-800"
          : isDark
          ? "bg-[#141210] border-[#24211d] text-[#b5af9f] hover:text-[#f4f1ea] hover:border-[#332f29]"
          : "bg-[#ffffff] border-[#eaeaea] text-[#5a5a57] hover:text-[#111111] hover:border-[#dedede]"
      } ${className}`}
    >
      <div className="relative w-3.5 h-3.5 flex items-center justify-center">
        {soundEnabled ? (
          // Playing waveform / speaker icon
          <svg
            className="w-3.5 h-3.5 text-current animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        ) : (
          // Muted / idle waveform icon
          <svg
            className="w-3.5 h-3.5 text-current opacity-70 group-hover:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 14l4-4m0 4l-4-4"
            />
          </svg>
        )}
      </div>
      <span className="text-[11px] font-mono font-medium tracking-wider uppercase">
        {soundEnabled ? "Sound on" : "Sound"}
      </span>
    </button>
  );
}
