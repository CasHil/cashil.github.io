import { useTheme } from "../../context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDark
          ? "Switch to light theme (currently dark)"
          : "Switch to dark theme (currently light)"
      }
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`group relative flex items-center gap-2 px-2.5 py-1.5 rounded-md border transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 ${
        isDark
          ? "bg-[#141210] border-[#24211d] text-[#b5af9f] hover:text-[#f4f1ea] hover:border-[#332f29]"
          : "bg-[#ffffff] border-[#eaeaea] text-[#5a5a57] hover:text-[#111111] hover:border-[#dedede]"
      } ${className}`}
    >
      <div className="relative w-3.5 h-3.5 flex items-center justify-center">
        {isDark ? (
          // Sun Icon (suggests switching to light)
          <svg
            className="w-3.5 h-3.5 text-[#e6e2d8]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 9h1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          // Moon Icon (suggests switching to dark)
          <svg
            className="w-3.5 h-3.5 text-[#5a5a57]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </div>
      <span className="text-[11px] font-mono font-medium tracking-wider uppercase">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
