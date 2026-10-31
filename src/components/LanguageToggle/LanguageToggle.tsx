import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className="relative inline-flex items-center text-xs font-sans font-semibold tracking-wide rounded-full bg-zinc-200/60 dark:bg-zinc-800/60 p-0.5 border border-zinc-200/80 dark:border-white/10"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`relative z-10 px-2.5 py-0.5 font-semibold rounded-full transition-colors duration-200 ${
          language === "en"
            ? "text-zinc-950 dark:text-white"
            : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
        }`}
        aria-pressed={language === "en"}
        aria-label="Switch language to English"
      >
        {language === "en" && (
          <motion.span
            layoutId="activeLangIndicator"
            className="absolute inset-0 bg-white dark:bg-zinc-700/90 rounded-full shadow-xs -z-10"
            transition={{ type: "spring", stiffness: 500, damping: 32 }}
          />
        )}
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("nl")}
        className={`relative z-10 px-2.5 py-0.5 font-semibold rounded-full transition-colors duration-200 ${
          language === "nl"
            ? "text-zinc-950 dark:text-white"
            : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
        }`}
        aria-pressed={language === "nl"}
        aria-label="Switch taal naar Nederlands"
      >
        {language === "nl" && (
          <motion.span
            layoutId="activeLangIndicator"
            className="absolute inset-0 bg-white dark:bg-zinc-700/90 rounded-full shadow-xs -z-10"
            transition={{ type: "spring", stiffness: 500, damping: 32 }}
          />
        )}
        NL
      </button>
    </div>
  );
}
