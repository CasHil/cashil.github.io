import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import Timeline from "../Timeline/Timeline";
import { useLanguage } from "../../context/LanguageContext";

export default function WorkExperience() {
  const { t, language } = useLanguage();

  const engineeringRoles = t.workExperience.items.filter(
    (item) => item.category === "engineering"
  );
  const educationRoles = t.workExperience.items.filter(
    (item) => item.category === "education"
  );

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <Heading title={t.workExperience.title} size="h1" />
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
          {t.workExperience.intro}
        </p>
      </div>

      {/* Section 1: Software Engineering & Production Systems */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {t.workExperience.primaryHeading}
          </h2>
          {t.workExperience.primarySubtitle && (
            <p className="text-xs font-normal text-zinc-500 dark:text-zinc-400 mt-0.5">
              {t.workExperience.primarySubtitle}
            </p>
          )}
        </div>

        <div className="pt-2">
          <Timeline data={engineeringRoles} />
        </div>
      </div>

      {/* Section 2: Teaching & Academic Experience */}
      {educationRoles.length > 0 && (
        <div className="pt-10 border-t border-zinc-200/80 dark:border-white/10 space-y-6">
          <div>
            <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
              {t.workExperience.archiveHeading}
            </h2>
            {t.workExperience.archiveSubtitle && (
              <p className="text-xs font-normal text-zinc-500 dark:text-zinc-400 mt-0.5">
                {t.workExperience.archiveSubtitle}
              </p>
            )}
          </div>

          <div className="pt-2">
            <Timeline data={educationRoles} />
          </div>
        </div>
      )}

      {/* Strict 2-CTA Hierarchy: 1 Primary + 1 Secondary */}
      <div className="pt-8 border-t border-zinc-200/80 dark:border-white/10 flex flex-wrap items-center gap-3">
        <Link
          to="/cv"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-medium text-xs sm:text-sm hover:bg-emerald-800 dark:hover:bg-emerald-300 dark:hover:text-zinc-950 transition-colors shadow-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>{language === "nl" ? "Bekijk Curriculum Vitae" : "View Curriculum Vitae"}</span>
          <span className="font-mono text-zinc-400 dark:text-zinc-500" aria-hidden="true">→</span>
        </Link>
        <Link
          to="/education"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm hover:border-emerald-600 dark:hover:border-emerald-400 transition-colors"
        >
          <span>{language === "nl" ? "Opleiding & Onderzoek" : "Education & Research"}</span>
          <span className="font-mono text-zinc-400" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
