import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./Intro.css";

export default function Intro() {
  const { t } = useLanguage();

  const tikkieSkills = ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL"];
  const bitsizedSkills = ["TypeScript", "React", "Node.js", "Docker"];

  return (
    <div className="space-y-16">
      {/* Hero Section with Recruiter Signal Hook */}
      <div className="space-y-6">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>{t.intro.statusBadge}</span>
        </div>

        {/* Editorial Hero Statement */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.18]">
          {t.intro.heroTitle}
        </h1>

        {/* Concise Scannable Bio */}
        <div className="space-y-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[58ch]">
          <p>{t.intro.bioParagraph1}</p>
          <p>{t.intro.bioParagraph2}</p>
        </div>

        {/* 5-Second Recruiter Signal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {t.intro.signals.map((sig) => (
            <div
              key={sig.title}
              className="rounded-xl p-3.5 sm:p-4 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xs border border-zinc-200/80 dark:border-white/[0.08] hover:border-emerald-600/30 dark:hover:border-emerald-400/25 transition-all shadow-xs group"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
                {sig.tag}
              </span>
              <div className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white tracking-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                {sig.title}
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-snug">
                {sig.description}
              </p>
            </div>
          ))}
        </div>

        {/* Deliberate Precision Button Pair */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
          <Link
            to="/cv"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md hover:bg-emerald-800 dark:hover:bg-emerald-300 dark:hover:text-zinc-950 active:scale-[0.98] transition-all duration-150 ring-1 ring-zinc-900/10 dark:ring-white/20"
          >
            <span>{t.intro.viewCv}</span>
            <span className="font-mono text-zinc-400 dark:text-zinc-500 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              →
            </span>
          </Link>
          <Link
            to="/work-experience"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300/80 dark:border-white/15 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm hover:border-emerald-600/50 dark:hover:border-emerald-400/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-[0.98] transition-all duration-150"
          >
            <span>{t.intro.exploreWork}</span>
            <span className="font-mono text-zinc-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Featured Engineering & Research (Structured Editorial Cards) */}
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
          <article className="rounded-2xl p-6 sm:p-7 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xs border border-zinc-200/80 dark:border-white/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-emerald-600/30 dark:hover:border-emerald-400/20 transition-all space-y-4 group">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-sans font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  {t.intro.tikkieTag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-0.5 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {t.intro.tikkieTitle}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {t.intro.tikkieSubtitle}
                </p>
              </div>
              <Link
                to="/work-experience"
                className="group/link inline-flex items-center gap-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
              >
                <span>{t.intro.tikkieLink}</span>
                <span className="font-mono transition-transform group-hover/link:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[58ch]">
              {t.intro.tikkieDescription}
            </p>

            {/* Impact Highlights */}
            {t.intro.tikkieHighlights && (
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-[58ch]">
                {t.intro.tikkieHighlights.map((point, idx) => {
                  const match = point.match(/^\*\*(.*?)\*\*:\s*(.*)$/);
                  return (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>
                        {match ? (
                          <>
                            <strong className="font-semibold text-zinc-950 dark:text-zinc-100">{match[1]}:</strong>{" "}
                            {match[2]}
                          </>
                        ) : (
                          point
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* Tactile Tech Stack Pills (font-sans) */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mr-1">Stack:</span>
              {tikkieSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-white/10 hover:border-emerald-500/40 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>

          {/* 2. Bitsized Platform Editorial Card */}
          <article className="rounded-2xl p-6 sm:p-7 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xs border border-zinc-200/80 dark:border-white/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-emerald-600/30 dark:hover:border-emerald-400/20 transition-all space-y-4 group">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-sans font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  {t.intro.bitsizedTag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-0.5 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {t.intro.bitsizedTitle}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {t.intro.bitsizedSubtitle}
                </p>
              </div>
              <Link
                to="/work-experience"
                className="group/link inline-flex items-center gap-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
              >
                <span>{t.intro.bitsizedLink}</span>
                <span className="font-mono transition-transform group-hover/link:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[58ch]">
              {t.intro.bitsizedDescription}
            </p>

            {/* Impact Highlights */}
            {t.intro.bitsizedHighlights && (
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-[58ch]">
                {t.intro.bitsizedHighlights.map((point, idx) => {
                  const match = point.match(/^\*\*(.*?)\*\*:\s*(.*)$/);
                  return (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>
                        {match ? (
                          <>
                            <strong className="font-semibold text-zinc-950 dark:text-zinc-100">{match[1]}:</strong>{" "}
                            {match[2]}
                          </>
                        ) : (
                          point
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* Tactile Tech Stack Pills (font-sans) */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mr-1">Stack:</span>
              {bitsizedSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-white/10 hover:border-emerald-500/40 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>

          {/* 3. Master's Thesis Research Insight */}
          <article className="rounded-2xl p-6 sm:p-7 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xs border border-zinc-200/80 dark:border-white/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-emerald-600/30 dark:hover:border-emerald-400/20 transition-all space-y-4 group">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-sans font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  {t.intro.thesisTag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-0.5 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {t.intro.thesisTitle}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {t.intro.thesisSubtitle}
                </p>
              </div>
              <Link
                to="/education#telemetry"
                className="group/link inline-flex items-center gap-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
              >
                <span>{t.intro.thesisLink}</span>
                <span className="font-mono transition-transform group-hover/link:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[58ch]">
              {t.intro.thesisDescription}
            </p>

            {/* Impact Highlights */}
            {t.intro.thesisHighlights && (
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-[58ch]">
                {t.intro.thesisHighlights.map((point, idx) => {
                  const match = point.match(/^\*\*(.*?)\*\*:\s*(.*)$/);
                  return (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>
                        {match ? (
                          <>
                            <strong className="font-semibold text-zinc-950 dark:text-zinc-100">{match[1]}:</strong>{" "}
                            {match[2]}
                          </>
                        ) : (
                          point
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* Methods Stack Pills (font-sans) */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mr-1">Methods:</span>
              {t.intro.thesisSkills.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-white/10 hover:border-emerald-500/40 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
