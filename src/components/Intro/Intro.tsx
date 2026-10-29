import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./Intro.css";

export default function Intro() {
  const { t } = useLanguage();

  const tikkieSkills = ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL"];
  const bitsizedSkills = ["TypeScript", "React", "Node.js", "Docker"];

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

        {/* Strict 2-CTA Hierarchy: 1 Primary + 1 Secondary */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
          <Link
            to="/cv"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium text-xs sm:text-sm hover:bg-emerald-800 dark:hover:bg-emerald-300 dark:hover:text-zinc-950 transition-colors shadow-xs"
          >
            <span>{t.intro.viewCv}</span>
            <span className="font-mono text-zinc-400 dark:text-zinc-500" aria-hidden="true">
              →
            </span>
          </Link>
          <Link
            to="/work-experience"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm hover:border-emerald-600 dark:hover:border-emerald-400 transition-colors"
          >
            <span>{t.intro.exploreWork}</span>
            <span className="font-mono text-zinc-400" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Featured Engineering & Research (Tactile Editorial Panels) */}
      <div className="pt-10 border-t border-zinc-200/80 dark:border-white/10 space-y-8">
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

        <div className="space-y-6">
          {/* 1. Tikkie Business Editorial Card */}
          <div className="rounded-2xl p-6 sm:p-7 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xs border border-zinc-200/80 dark:border-white/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-emerald-600/30 dark:hover:border-emerald-400/20 transition-all space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-sans font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  {t.intro.tikkieTag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-0.5">
                  {t.intro.tikkieTitle}
                </h3>
                <p className="text-xs sm:text-sm font-normal text-zinc-500 dark:text-zinc-400">
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

            <div className="pt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xs">
              <span className="font-sans text-zinc-500 dark:text-zinc-400 font-medium">Stack:</span>
              <span className="font-mono text-zinc-700 dark:text-zinc-300">
                {tikkieSkills.map((skill, idx) => (
                  <span key={skill}>
                    {idx > 0 && <span className="mx-1.5 text-emerald-600/40 dark:text-emerald-400/40">·</span>}
                    <span className="hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">{skill}</span>
                  </span>
                ))}
              </span>
            </div>
          </div>

          {/* 2. Bitsized Platform Editorial Card (0-to-1 Systems Engineering) */}
          <div className="rounded-2xl p-6 sm:p-7 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xs border border-zinc-200/80 dark:border-white/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-emerald-600/30 dark:hover:border-emerald-400/20 transition-all space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-sans font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  {t.intro.bitsizedTag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-0.5">
                  {t.intro.bitsizedTitle}
                </h3>
                <p className="text-xs sm:text-sm font-normal text-zinc-500 dark:text-zinc-400">
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

            <div className="pt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xs">
              <span className="font-sans text-zinc-500 dark:text-zinc-400 font-medium">Stack:</span>
              <span className="font-mono text-zinc-700 dark:text-zinc-300">
                {bitsizedSkills.map((skill, idx) => (
                  <span key={skill}>
                    {idx > 0 && <span className="mx-1.5 text-emerald-600/40 dark:text-emerald-400/40">·</span>}
                    <span className="hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">{skill}</span>
                  </span>
                ))}
              </span>
            </div>
          </div>

          {/* 3. Master's Thesis Research Insight (Quantitative Data Rigor) */}
          <div className="rounded-2xl p-6 sm:p-7 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xs border border-zinc-200/80 dark:border-white/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-emerald-600/30 dark:hover:border-emerald-400/20 transition-all space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-sans font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  {t.intro.thesisTag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-0.5">
                  {t.intro.thesisTitle}
                </h3>
                <p className="text-xs sm:text-sm font-normal text-zinc-500 dark:text-zinc-400">
                  {t.intro.thesisSubtitle}
                </p>
              </div>
              <Link
                to="/education#telemetry"
                className="group inline-flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <span>{t.intro.thesisLink}</span>
                <span className="font-mono transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[58ch]">
              {t.intro.thesisDescription}
            </p>

            <div className="pt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xs">
              <span className="font-sans text-zinc-500 dark:text-zinc-400 font-medium">Methods:</span>
              <span className="font-mono text-zinc-700 dark:text-zinc-300">
                {t.intro.thesisSkills.map((item, idx) => (
                  <span key={item}>
                    {idx > 0 && <span className="mx-1.5 text-emerald-600/40 dark:text-emerald-400/40">·</span>}
                    <span className="hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">{item}</span>
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
