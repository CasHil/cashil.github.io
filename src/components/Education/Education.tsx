import Heading from "../Heading/Heading";
import Timeline from "../Timeline/Timeline";
import DataExplorer from "../DataExplorer/DataExplorer";
import { useLanguage } from "../../context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

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
      <div className="pt-10 border-t border-zinc-200/80 dark:border-white/10">
        <DataExplorer headingLevel="h2" />
      </div>

      {/* Strict 2-CTA Hierarchy: 1 Primary + 1 Secondary */}
      <div className="pt-8 border-t border-zinc-200/80 dark:border-white/10 flex flex-wrap items-center gap-3">
        <a
          href={t.dataExplorer.repositoryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium text-xs sm:text-sm hover:bg-emerald-800 dark:hover:bg-emerald-300 dark:hover:text-zinc-950 transition-colors shadow-xs"
        >
          <span>{t.dataExplorer.repositoryText}</span>
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
