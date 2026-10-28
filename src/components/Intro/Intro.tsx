import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./Intro.css";

export default function Intro() {
  const { t } = useLanguage();

  const tikkieSkills = ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL", "Fintech Scale"];
  const bitsizedSkills = ["Product Engineering", "React", "Node.js", "EdTech Platform"];

  return (
    <div className="space-y-16">
      {/* Editorial Hero Statement */}
      <div className="space-y-6">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.18]">
          {t.intro.heroTitle}
        </h1>

        <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
          <p>{t.intro.bioParagraph1}</p>
          <p>{t.intro.bioParagraph2}</p>
          {t.intro.bioParagraph3 && <p>{t.intro.bioParagraph3}</p>}
        </div>

        {/* Kinetic Editorial Links (Zero Bubbly Pills, Sleek Text Kinetics) */}
        <div className="flex flex-wrap items-center gap-6 pt-2 text-sm">
          <Link
            to="/work-experience"
            className="group inline-flex items-center gap-1.5 font-medium text-zinc-950 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
          >
            <span>{t.intro.exploreWork}</span>
            <span className="font-mono transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>
          <Link
            to="/education"
            className="group inline-flex items-center gap-1.5 font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <span>{t.intro.exploreEdu}</span>
            <span className="font-mono transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>
          <a
            href="mailto:casperhildebrand@gmail.com"
            className="group inline-flex items-center gap-1.5 font-medium text-emerald-800 dark:text-emerald-400 hover:underline transition-colors"
          >
            <span>{t.intro.getInTouch}</span>
            <span className="font-mono transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
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

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
              {t.intro.tikkieDescription}
            </p>

            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">Stack:</span>{" "}
              {tikkieSkills.join(" · ")}
            </p>
          </div>

          {/* 2. Master's Thesis Research Insight */}
          <div className="pt-8 space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                  TU Delft · Master's Research
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-0.5">
                  Debugging the Divide: 174,988 CS MOOC Learners
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  Data Science Specialization · 14 Course Iterations
                </p>
              </div>
              <Link
                to="/education"
                className="group inline-flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                <span>Explore telemetry & clusters</span>
                <span className="font-mono transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
              Empirical thesis analyzing gender participation gaps across TU Delft CS MOOCs. Revealed that women enroll with a <strong>+16.7% higher career advancement intent</strong> compared to men, who engage primarily for hobby and leisure (+21.0%).
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1">
              <span>k-Means Clustering</span>
              <span>·</span>
              <span>Clickstream Telemetry</span>
              <span>·</span>
              <span>Python / Pandas</span>
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

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
              {t.intro.bitsizedDescription}
            </p>

            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">Stack:</span>{" "}
              {bitsizedSkills.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
