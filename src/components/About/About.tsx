import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Heading title={t.about.title} size="h1" />
        <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mt-4 max-w-[56ch]">
          <p>{t.about.paragraph1}</p>
          <p>{t.about.paragraph2}</p>
          <p>{t.about.paragraph3}</p>
        </div>
      </div>

      {/* Outside of Work */}
      <div className="pt-8 border-t border-zinc-200 dark:border-white/10 space-y-6">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.about.beyondHeading}
          </h2>
          {t.about.beyondSubtitle && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {t.about.beyondSubtitle}
            </p>
          )}
        </div>

        <div className="space-y-6 divide-y divide-zinc-200 dark:divide-zinc-800/80">
          {t.about.interests.map((item) => (
            <div
              key={item.title}
              className="pt-6 first:pt-0 space-y-1.5"
            >
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[58ch]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Strict 2-CTA Hierarchy: 1 Primary + 1 Secondary */}
      <div className="pt-8 border-t border-zinc-200 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <a
          href="mailto:casperhildebrand@gmail.com"
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md hover:bg-emerald-800 dark:hover:bg-emerald-300 dark:hover:text-zinc-950 active:scale-[0.98] transition-all duration-150 ring-1 ring-zinc-900/10 dark:ring-white/20 min-h-[44px]"
        >
          <span>{t.outreach.emailBtn}</span>
          <span className="font-mono text-zinc-400 dark:text-zinc-500 transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </a>
        <Link
          to="/cv"
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-zinc-300/80 dark:border-white/15 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm hover:border-emerald-600/50 dark:hover:border-emerald-400/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-[0.98] transition-all duration-150 min-h-[44px]"
        >
          <span>{t.outreach.cvBtn}</span>
          <span className="font-mono text-zinc-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

