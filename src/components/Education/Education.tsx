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

      <div className="pt-2">
        <DataExplorer headingLevel="h2" />
      </div>

      <div className="pt-10 border-t border-zinc-200/80 dark:border-white/10 space-y-6">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {t.education.thesisTitle}
          </h2>
        </div>
        <Timeline data={t.education.items} />
      </div>
    </div>
  );
}
