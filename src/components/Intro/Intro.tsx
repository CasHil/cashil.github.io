import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import DataExplorer from "../DataExplorer/DataExplorer";
import { useLanguage } from "../../context/LanguageContext";
import "./Intro.css";

export default function Intro() {
  const { t } = useLanguage();

  const tikkieSkills = ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL", "Fintech Scale"];
  const bitsizedSkills = ["Product Engineering", "React", "Node.js", "EdTech", "Curriculum"];

  return (
    <div className="space-y-12 max-w-[65ch]">
      {/* Editorial Hero Statement */}
      <div className="space-y-6">
        <Heading
          title={t.intro.heroTitle}
          animated
          size="h1"
        />

        <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <p>{t.intro.bioParagraph1}</p>
          <p>{t.intro.bioParagraph2}</p>
          {t.intro.bioParagraph3 && <p>{t.intro.bioParagraph3}</p>}
        </div>

        {/* Action Controls (Sharp Swiss Editorial Controls, Zero Bubbly Pills) */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            to="/work-experience"
            className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-900 bg-zinc-900 text-white hover:bg-transparent hover:text-zinc-900 dark:border-zinc-200 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-transparent dark:hover:text-white rounded-[2px] font-mono text-xs uppercase tracking-wider transition-all shadow-sm"
          >
            <span>{t.intro.exploreWork}</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            to="/education"
            className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-zinc-900 dark:hover:border-zinc-300 rounded-[2px] font-mono text-xs uppercase tracking-wider transition-all"
          >
            <span>{t.intro.exploreEdu}</span>
          </Link>
          <a
            href="mailto:casperhildebrand@gmail.com"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400 hover:underline tracking-wider uppercase transition-colors pl-1"
          >
            <span>{t.intro.getInTouch}</span>
          </a>
        </div>
      </div>

      {/* Featured Engineering & Research */}
      <div className="pt-8 border-t border-zinc-200 dark:border-white/10 space-y-6">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.intro.featuredHeading}
          </h2>
          {t.intro.featuredSubtitle && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {t.intro.featuredSubtitle}
            </p>
          )}
        </div>

        <div className="space-y-6 divide-y divide-zinc-200 dark:divide-zinc-800/80">
          {/* 1. Tikkie Business Editorial Section */}
          <div className="pt-6 first:pt-0 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                  {t.intro.tikkieTag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mt-0.5">
                  {t.intro.tikkieTitle}
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {t.intro.tikkieSubtitle}
                </p>
              </div>
              <Link
                to="/work-experience"
                className="text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white underline underline-offset-4 transition-colors"
              >
                {t.intro.tikkieLink}
              </Link>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {t.intro.tikkieDescription}
            </p>

            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">Stack:</span>{" "}
              {tikkieSkills.join(" · ")}
            </p>
          </div>

          {/* 2. Interactive Master's Thesis Telemetry Console */}
          <div className="pt-6">
            <DataExplorer headingLevel="h3" />
          </div>

          {/* 3. Bitsized Platform Editorial Section */}
          <div className="pt-6 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                  {t.intro.bitsizedTag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mt-0.5">
                  {t.intro.bitsizedTitle}
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {t.intro.bitsizedSubtitle}
                </p>
              </div>
              <Link
                to="/work-experience"
                className="text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white underline underline-offset-4 transition-colors"
              >
                {t.intro.bitsizedLink}
              </Link>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
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
