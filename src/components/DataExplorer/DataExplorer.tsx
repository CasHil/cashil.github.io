import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

interface DataExplorerProps {
  headingLevel?: "h2" | "h3";
}

export default function DataExplorer({ headingLevel = "h3" }: DataExplorerProps) {
  const [activeTab, setActiveTab] = useState<"motivations" | "clusters">("motivations");
  const { t } = useLanguage();

  const d = t.dataExplorer;
  const HeadingTag = headingLevel;

  const motivationData = [
    {
      label: d.motivations.careerLabel,
      women: 58.2,
      men: 41.5,
      delta: d.motivations.careerDelta,
      deltaType: "women-higher" as const,
      explanation: d.motivations.careerExplanation,
    },
    {
      label: d.motivations.leisureLabel,
      women: 17.7,
      men: 38.7,
      delta: d.motivations.leisureDelta,
      deltaType: "men-higher" as const,
      explanation: d.motivations.leisureExplanation,
    },
    {
      label: d.motivations.degreeLabel,
      women: 24.1,
      men: 19.8,
      delta: d.motivations.degreeDelta,
      deltaType: "women-higher" as const,
      explanation: d.motivations.degreeExplanation,
    },
  ];

  const clusterData = [
    {
      name: d.clusters.completersName,
      share: "8.4%",
      behavior: d.clusters.completersBehavior,
      description: d.clusters.completersDesc,
      indicatorColor: "bg-emerald-500",
    },
    {
      name: d.clusters.auditorsName,
      share: "44.2%",
      behavior: d.clusters.auditorsBehavior,
      description: d.clusters.auditorsDesc,
      indicatorColor: "bg-sky-500",
    },
    {
      name: d.clusters.samplersName,
      share: "47.4%",
      behavior: d.clusters.samplersBehavior,
      description: d.clusters.samplersDesc,
      indicatorColor: "bg-amber-500",
    },
  ];

  return (
    <div className="rounded-[4px] border border-zinc-200 dark:border-white/10 bg-white dark:bg-surface p-5 sm:p-6 shadow-sm dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)] space-y-6">
      {/* Header and Context */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <HeadingTag className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
            {d.title}
          </HeadingTag>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            {d.badge}
          </span>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
          {d.subtitle}
        </p>
      </div>

      {/* High-Level Overview Metrics (Flat Editorial Grid, No Nested Cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-zinc-200 dark:border-white/10">
        <div>
          <span className="block text-2xl font-bold font-mono text-zinc-900 dark:text-white">{d.statLearnersValue}</span>
          <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{d.statLearners}</span>
        </div>
        <div>
          <span className="block text-2xl font-bold font-mono text-emerald-800 dark:text-emerald-400">14</span>
          <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{d.statRuns}</span>
        </div>
        <div>
          <span className="block text-2xl font-bold font-mono text-sky-800 dark:text-sky-400">4</span>
          <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{d.statCourses}</span>
        </div>
        <div>
          <span className="block text-2xl font-bold font-mono text-amber-800 dark:text-amber-400">{d.statIntentValue}</span>
          <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{d.statIntent}</span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-white/10 pb-2">
        <button
          type="button"
          onClick={() => setActiveTab("motivations")}
          className={`px-3 py-1 rounded-[2px] text-xs font-medium font-mono uppercase tracking-wider transition-colors ${
            activeTab === "motivations"
              ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5"
          }`}
        >
          {d.tabMotivations}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("clusters")}
          className={`px-3 py-1 rounded-[2px] text-xs font-medium font-mono uppercase tracking-wider transition-colors ${
            activeTab === "clusters"
              ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5"
          }`}
        >
          {d.tabClusters}
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "motivations" ? (
        <div className="space-y-5">
          <div className="space-y-4">
            {motivationData.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-sm font-semibold text-zinc-900 dark:text-gray-100">
                    {item.label}
                  </span>
                  <span
                    className={`text-xs font-mono font-semibold ${
                      item.deltaType === "women-higher"
                        ? "text-emerald-800 dark:text-emerald-400"
                        : "text-sky-800 dark:text-sky-400"
                    }`}
                  >
                    {item.delta}
                  </span>
                </div>

                {/* Comparative Visual Bars */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-xs font-mono text-zinc-600 dark:text-zinc-300">
                      {d.womenLabel}
                    </span>
                    <div className="flex-1 h-3 rounded-full bg-zinc-200/80 dark:bg-canvas border border-zinc-300/60 dark:border-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-emerald-700 dark:bg-emerald-500/80 transition-all duration-500"
                        style={{ width: `${item.women}%` }}
                      />
                    </div>
                    <span className="w-12 text-right text-xs font-mono font-semibold text-zinc-900 dark:text-white">
                      {item.women}%
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-16 text-xs font-mono text-zinc-600 dark:text-zinc-300">
                      {d.menLabel}
                    </span>
                    <div className="flex-1 h-3 rounded-full bg-zinc-200/80 dark:bg-canvas border border-zinc-300/60 dark:border-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-sky-700 dark:bg-sky-500/70 transition-all duration-500"
                        style={{ width: `${item.men}%` }}
                      />
                    </div>
                    <span className="w-12 text-right text-xs font-mono font-semibold text-zinc-900 dark:text-white">
                      {item.men}%
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-normal">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>

          <div className="border-l-2 border-emerald-700 dark:border-emerald-400 pl-4 py-1 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
            <strong className="text-zinc-900 dark:text-white font-semibold">{d.researchTakeawayTitle}</strong>{" "}
            {d.researchTakeawayText}
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {clusterData.map((cluster) => (
              <div
                key={cluster.name}
                className="space-y-1.5 border-t border-zinc-200 dark:border-zinc-800/80 pt-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-zinc-900 dark:text-white">
                    {cluster.name}
                  </span>
                  <span className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">
                    {cluster.share}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${cluster.indicatorColor}`} />
                  <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                    {cluster.behavior}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-normal">
                  {cluster.description}
                </p>
              </div>
            ))}
          </div>

          <div className="border-l-2 border-zinc-400 dark:border-zinc-600 pl-4 py-1 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
            <strong className="text-zinc-900 dark:text-white font-semibold">{d.methodologyTitle}</strong>{" "}
            {d.methodologyText}
          </div>
        </div>
      )}

      {/* Thesis Reference Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-zinc-200 dark:border-white/10 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <span>{d.authorLabel}</span>
        <span>{d.facultyLabel}</span>
      </div>
    </div>
  );
}
