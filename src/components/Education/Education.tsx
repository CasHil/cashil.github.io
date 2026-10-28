import Heading from "../Heading/Heading";
import Timeline from "../Timeline/Timeline";
import DataExplorer from "../DataExplorer/DataExplorer";
import { useLanguage } from "../../context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 max-w-[65ch]">
      <div>
        <Heading title={t.education.title} size="h1" />
        <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mt-2">
          {t.education.intro}
        </p>
      </div>

      <DataExplorer headingLevel="h2" />

      <div className="pt-6 border-t border-zinc-200 dark:border-white/10 space-y-4">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          {t.education.thesisTitle}
        </h2>
        <div className="border-t border-zinc-200 dark:border-zinc-800/80">
          <Timeline data={t.education.items} />
        </div>
      </div>
    </div>
  );
}
