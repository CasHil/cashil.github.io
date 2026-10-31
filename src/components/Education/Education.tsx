import { useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import Timeline from "../Timeline/Timeline";
import DataExplorer from "../DataExplorer/DataExplorer";
import { useLanguage } from "../../context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  useEffect(() => {
    if (window.location.hash === "#telemetry") {
      const el = document.getElementById("telemetry");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <Heading title={t.education.title} size="h1" />
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
          {t.education.intro}
        </p>
      </div>

      {/* Academic Credentials & Degrees (Immediate Recruiter Verification) */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {t.education.thesisTitle}
          </h2>
        </div>
        <Timeline data={t.education.items} />
      </div>

      {/* Research Telemetry Deep Dive */}
      <div id="telemetry" className="pt-10 border-t border-zinc-200/80 dark:border-white/10 scroll-mt-8">
        <DataExplorer headingLevel="h2" />
      </div>

      {/* Strict 2-CTA Hierarchy: 1 Primary + 1 Secondary */}
      <div className="pt-8 border-t border-zinc-200/80 dark:border-white/10 flex flex-wrap items-center gap-3">
        <a
          href={t.dataExplorer.repositoryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md hover:bg-emerald-800 dark:hover:bg-emerald-300 dark:hover:text-zinc-950 active:scale-[0.98] transition-all duration-150 ring-1 ring-zinc-900/10 dark:ring-white/20"
        >
          <span>{t.dataExplorer.repositoryText}</span>
          <span className="font-mono text-zinc-400 dark:text-zinc-500 transition-transform group-hover:translate-x-0.5" aria-hidden="true">↗</span>
        </a>
        <Link
          to="/cv"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300/80 dark:border-white/15 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm hover:border-emerald-600/50 dark:hover:border-emerald-400/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-[0.98] transition-all duration-150"
        >
          <span>{t.outreach.cvBtn}</span>
          <span className="font-mono text-zinc-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
