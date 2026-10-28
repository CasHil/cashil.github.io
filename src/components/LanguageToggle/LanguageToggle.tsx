import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className="relative inline-flex items-center text-xs font-mono border border-zinc-300 dark:border-zinc-700 rounded-[2px] bg-zinc-100 dark:bg-zinc-900/90 p-[2px]"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`relative z-10 px-2 py-0.5 font-semibold rounded-[2px] transition-colors duration-150 active:scale-95 ${
          language === "en"
            ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm"
            : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        }`}
        aria-pressed={language === "en"}
        aria-label="Switch language to English"
      >
        {language === "en" && (
          <motion.span
            layoutId="activeLangIndicator"
            className="absolute inset-0 bg-zinc-900 dark:bg-white rounded-[2px] shadow-sm -z-10"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("nl")}
        className={`relative z-10 px-2 py-0.5 font-semibold rounded-[2px] transition-colors duration-150 active:scale-95 ${
          language === "nl"
            ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm"
            : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        }`}
        aria-pressed={language === "nl"}
        aria-label="Switch taal naar Nederlands"
      >
        {language === "nl" && (
          <motion.span
            layoutId="activeLangIndicator"
            className="absolute inset-0 bg-zinc-900 dark:bg-white rounded-[2px] shadow-sm -z-10"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
        NL
      </button>
    </div>
  );
}
