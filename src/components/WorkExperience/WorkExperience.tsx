import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "../Heading/Heading";
import Timeline from "../Timeline/Timeline";
import { useLanguage } from "../../context/LanguageContext";

type FilterType = "all" | "engineering" | "education";

export default function WorkExperience() {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const trackParam = searchParams.get("track") as FilterType | null;

  const validFilter = trackParam === "engineering" || trackParam === "education" ? trackParam : "all";
  const [filter, setFilterState] = useState<FilterType>(validFilter);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (trackParam && (trackParam === "engineering" || trackParam === "education" || trackParam === "all")) {
      setFilterState(trackParam);
    }
  }, [trackParam]);

  const handleFilterChange = (newFilter: FilterType) => {
    setFilterState(newFilter);
    setExpandedIndex(null);
    if (newFilter === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ track: newFilter });
    }
  };

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

  // Featured deep dives (Top 3 for all/engineering, top 2 for education)
  const featuredCutoff = filter === "education" ? 2 : 3;
  const featuredRoles = filteredItems.slice(0, featuredCutoff);
  const archiveItems = filteredItems.filter((item) => !featuredRoles.includes(item));

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <Heading title={t.workExperience.title} size="h1" />
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
          {t.workExperience.intro}
        </p>
      </div>

      {/* Recruiter Dual-Track Filter (Fluid Sliding Pills) */}
      <div className="flex flex-wrap items-center gap-2 border-b border-zinc-200/80 dark:border-white/10 pb-4">
        {filters.map((f) => {
          const isActive = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => handleFilterChange(f.key)}
              className={`relative px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 ${
                isActive
                  ? "text-zinc-950 dark:text-white"
                  : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>{f.label}</span>
                <span className="text-xs font-mono opacity-60">
                  {f.count}
                </span>
              </span>
              {isActive && (
                <motion.div
                  layoutId="workFilterPill"
                  className="absolute inset-0 rounded-full bg-zinc-200/80 dark:bg-zinc-800/90 shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tier 1: Featured Core Roles (Spacious Case Studies) */}
      <div className="space-y-6">
        <div>
          <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {t.workExperience.primaryHeading}
          </h2>
          <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mt-0.5">
            {t.workExperience.primarySubtitle}
          </p>
        </div>

        <div className="pt-2">
          <Timeline data={featuredRoles} />
        </div>
      </div>

      {/* Tier 2: Career Index & Trajectory (Minimalist Monograph Index) */}
      <div className="pt-10 border-t border-zinc-200/80 dark:border-white/10 space-y-6">
        <div>
          <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {t.workExperience.archiveHeading}
          </h2>
          <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 mt-0.5">
            {t.workExperience.archiveSubtitle}
          </p>
        </div>

        <div className="divide-y divide-zinc-200/70 dark:divide-zinc-800/70 border-y border-zinc-200/70 dark:border-zinc-800/70">
          {archiveItems.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div key={`${item.title}-${item.startDate}-${idx}`} className="py-3.5 group">
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className="w-full flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-left focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 w-28 shrink-0">
                      {item.startDate} - {item.endDate}
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </span>
                      <span className="text-xs text-zinc-600 dark:text-zinc-400 ml-2">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono font-medium uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-white/5">
                      {item.category === "engineering" ? "Systems" : "Pedagogy"}
                    </span>
                    <span className={`inline-flex items-center justify-center h-5 w-5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400 border border-zinc-200/50 dark:border-white/5 text-xs font-mono transition-transform duration-200 ${isExpanded ? "rotate-45" : "rotate-0"}`}>
                      +
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pl-0 sm:pl-[124px] pr-2 pb-2 space-y-2.5 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        <p className="max-w-[58ch]">{item.text}</p>
                        {item.skills && item.skills.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            {item.skills.map((s) => (
                              <span
                                key={s}
                                className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-300 border border-zinc-200/50 dark:border-white/5"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
