import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./Intro.css";

export default function Intro() {
  const { t } = useLanguage();

  const tikkieSkills = ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL", "Fintech Scale"];
  const bitsizedSkills = ["TypeScript", "React", "Node.js", "Docker", "Sandboxed Execution"];

  return (
    <div className="space-y-16">
      {/* Editorial Hero Statement */}
      <div className="space-y-6">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.18]">
          {t.intro.heroTitle}
        </h1>

        <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[56ch]">
          <p>{t.intro.bioParagraph1}</p>
          <p>{t.intro.bioParagraph2}</p>
          {t.intro.bioParagraph3 && <p>{t.intro.bioParagraph3}</p>}
        </div>

        {/* Clean 2-Tier Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2 text-sm">
          <Link
            to="/cv"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium text-xs sm:text-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>{t.intro.viewCv}</span>
            <span className="font-mono text-zinc-400 dark:text-zinc-500" aria-hidden="true">
              →
            </span>
          </Link>
          <Link
            to="/work-experience"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
          >
            <span>{t.intro.exploreWork}</span>
            <span className="font-mono text-zinc-400" aria-hidden="true">
              →
            </span>
          </Link>
          <Link
            to="/education"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <span>{t.intro.exploreEdu}</span>
            <span className="font-mono text-zinc-400" aria-hidden="true">
              →
            </span>
          </Link>
          <a
            href="mailto:casperhildebrand@gmail.com"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-emerald-800 dark:text-emerald-400 hover:underline transition-colors"
          >
            <span>{t.intro.getInTouch}</span>
            <span className="font-mono" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>

      {/* Featured Engineering & Research (Open Editorial Layout, Zero Nested Box Cards) */}
      <div className="pt-10 border-t border-zinc-200/80 dark:border-white/10 space-y-10">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {t.intro.featuredHeading}
          </h2>
          {t.intro.featuredSubtitle && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {t.intro.featuredSubtitle}
            </p>
          )}
        </div>

        <div className="space-y-10 divide-y divide-zinc-200/80 dark:divide-zinc-800/80">
          {/* 1. Tikkie Business Editorial Section */}
          <div className="pt-8 first:pt-0 space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                  {t.intro.tikkieTag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-0.5">
                  {t.intro.tikkieTitle}
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {t.intro.tikkieSubtitle}
                </p>
              </div>
              <Link
                to="/work-experience"
                className="group inline-flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <span>{t.intro.tikkieLink}</span>
                <span className="font-mono transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[58ch]">
              {t.intro.tikkieDescription}
            </p>

            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mr-1">Stack:</span>
              {tikkieSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-300 border border-zinc-200/50 dark:border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Master's Thesis Research Insight */}
          <div className="pt-8 space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                  {t.intro.thesisTag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-0.5">
                  {t.intro.thesisTitle}
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {t.intro.thesisSubtitle}
                </p>
              </div>
              <Link
                to="/education"
                className="group inline-flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <span>{t.intro.thesisLink}</span>
                <span className="font-mono transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[58ch]">
              {t.intro.thesisDescription}
            </p>

            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mr-1">Methods:</span>
              {t.intro.thesisSkills.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-300 border border-zinc-200/50 dark:border-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* 3. Bitsized Platform Editorial Section */}
          <div className="pt-8 space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                  {t.intro.bitsizedTag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-0.5">
                  {t.intro.bitsizedTitle}
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {t.intro.bitsizedSubtitle}
                </p>
              </div>
              <Link
                to="/work-experience"
                className="group inline-flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <span>{t.intro.bitsizedLink}</span>
                <span className="font-mono transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[58ch]">
              {t.intro.bitsizedDescription}
            </p>

            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mr-1">Stack:</span>
              {bitsizedSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-300 border border-zinc-200/50 dark:border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
