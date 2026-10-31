import { useLanguage } from "../../context/LanguageContext";
import Heading from "../Heading/Heading";

export default function Cv() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Header & Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-zinc-200/80 dark:border-white/10">
        <div>
          <Heading title={t.cv.title} size="h1" />
          <p className="text-xs sm:text-sm font-normal text-zinc-500 dark:text-zinc-400 mt-1">
            {t.cv.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="/cv/Casper_Hildebrand_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium text-xs sm:text-sm hover:bg-emerald-800 dark:hover:bg-emerald-300 dark:hover:text-zinc-950 transition-colors shadow-xs"
          >
            <span>{t.cv.openNewTab}</span>
            <span className="font-mono" aria-hidden="true">↗</span>
          </a>
          <a
            href="/cv/Casper_Hildebrand_CV.pdf"
            download="Casper_Hildebrand_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm hover:border-emerald-600 dark:hover:border-emerald-400 transition-colors"
          >
            <span>{t.cv.downloadPdf}</span>
            <span className="font-mono text-zinc-400" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      {/* Embedded Document Frame */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900/60 shadow-sm">
        {/* Mobile helper notice */}
        <div className="sm:hidden p-4 bg-emerald-500/10 border-b border-emerald-500/20 text-xs text-zinc-700 dark:text-zinc-300 flex items-center justify-between gap-3">
          <span>{t.cv.mobilePrompt}</span>
          <a
            href="/cv/Casper_Hildebrand_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-700 dark:bg-emerald-400 text-white dark:text-zinc-950 font-semibold text-xs shrink-0 shadow-xs hover:bg-emerald-800 transition-colors"
          >
            <span>{t.cv.viewFullscreen}</span>
            <span className="font-mono" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="w-full h-[700px] sm:h-[880px] lg:h-[960px]">
          <object
            data="/cv/Casper_Hildebrand_CV.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
            type="application/pdf"
            className="w-full h-full"
            aria-label="Casper Hildebrand Curriculum Vitae PDF"
          >
            <iframe
              src="/cv/Casper_Hildebrand_CV.pdf#view=FitH"
              title="Casper Hildebrand Curriculum Vitae"
              className="w-full h-full border-0"
            >
              <div className="p-8 text-center space-y-3">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Your browser does not support embedded PDF viewing.
                </p>
                <a
                  href="/cv/Casper_Hildebrand_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-medium hover:bg-emerald-800 dark:hover:bg-emerald-300 transition-colors"
                >
                  {t.cv.openNewTab} ↗
                </a>
              </div>
            </iframe>
          </object>
        </div>
      </div>
    </div>
  );
}
