import { useState } from "react";
import Heading from "../Heading/Heading";
import Timeline from "../Timeline/Timeline";
import { useLanguage } from "../../context/LanguageContext";

type FilterType = "all" | "engineering" | "education";

export default function WorkExperience() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredItems = t.workExperience.items.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  const engineeringCount = t.workExperience.items.filter(
    (i) => i.category === "engineering"
  ).length;
  const educationCount = t.workExperience.items.filter(
    (i) => i.category === "education"
  ).length;

  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: "all", label: t.workExperience.filterAll, count: t.workExperience.items.length },
    { key: "engineering", label: t.workExperience.filterEngineering, count: engineeringCount },
    { key: "education", label: t.workExperience.filterEducation, count: educationCount },
  ];

  return (
    <div className="space-y-6 max-w-[65ch]">
      <div>
        <Heading title={t.workExperience.title} size="h1" />
        <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mt-2">
          {t.workExperience.intro}
        </p>
      </div>

      {/* Recruiter Dual-Track Filter */}
      <div className="flex flex-wrap gap-2 pt-2">
        {filters.map((f) => {
          const isActive = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`relative px-3 py-1.5 rounded-[2px] font-mono text-xs uppercase tracking-wider transition-all duration-150 active:scale-95 border ${
                isActive
                  ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900 font-semibold shadow-sm"
                  : "border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-500"
              }`}
            >
              <span>{f.label}</span>{" "}
              <span className="text-xs ml-1 font-mono opacity-80">
                ({f.count})
              </span>
            </button>
          );
        })}
      </div>

      <div className="border-t border-zinc-200 dark:border-white/10 mt-6">
        <Timeline data={filteredItems} />
      </div>
    </div>
  );
}
