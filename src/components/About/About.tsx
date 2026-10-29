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
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {t.about.beyondSubtitle}
          </p>
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
      <div className="pt-8 border-t border-zinc-200 dark:border-white/10 flex flex-wrap items-center gap-3">
        <a
          href="mailto:casperhildebrand@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium text-xs sm:text-sm hover:bg-emerald-800 dark:hover:bg-emerald-300 dark:hover:text-zinc-950 transition-colors shadow-xs"
        >
          <span>Get in Touch (Email)</span>
          <span className="font-mono" aria-hidden="true">→</span>
        </a>
        <a
          href="/cv"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm hover:border-emerald-600 dark:hover:border-emerald-400 transition-colors"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>Curriculum Vitae</span>
          <span className="font-mono text-zinc-400" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

