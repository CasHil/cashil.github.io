import { useState } from "react";
import { motion } from "framer-motion";
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
    <div className="space-y-6">
      {/* Header and Context */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <HeadingTag className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight">
            {d.title}
          </HeadingTag>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            {d.badge}
          </span>
        </div>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
          {d.subtitle}
        </p>
      </div>

      {/* High-Level Overview Metrics (Flat Editorial Grid, Zero Box Enclosures) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-5 border-y border-zinc-200/80 dark:border-white/10">
        <div>
          <span className="block text-2xl sm:text-3xl font-bold font-mono tracking-tight text-zinc-950 dark:text-white">{d.statLearnersValue}</span>
          <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-1">{d.statLearners}</span>
        </div>
        <div>
          <span className="block text-2xl sm:text-3xl font-bold font-mono tracking-tight text-emerald-700 dark:text-emerald-400">14</span>
          <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-1">{d.statRuns}</span>
        </div>
        <div>
          <span className="block text-2xl sm:text-3xl font-bold font-mono tracking-tight text-sky-700 dark:text-sky-400">4</span>
          <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-1">{d.statCourses}</span>
        </div>
        <div>
          <span className="block text-2xl sm:text-3xl font-bold font-mono tracking-tight text-amber-700 dark:text-amber-400">{d.statIntentValue}</span>
          <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-1">{d.statIntent}</span>
        </div>
      </div>

      {/* Tab Navigation (Fluid Organic Pill Switcher) */}
      <div className="flex items-center gap-1.5 border-b border-zinc-200/80 dark:border-white/10 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab("motivations")}
          className={`relative px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 ${
            activeTab === "motivations"
              ? "text-zinc-950 dark:text-white"
              : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
        >
          <span className="relative z-10">{d.tabMotivations}</span>
          {activeTab === "motivations" && (
            <motion.div
              layoutId="dataExplorerTabPill"
              className="absolute inset-0 rounded-full bg-zinc-200/80 dark:bg-zinc-800/90 shadow-sm"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("clusters")}
          className={`relative px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors duration-200 ${
            activeTab === "clusters"
              ? "text-zinc-950 dark:text-white"
              : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
        >
          <span className="relative z-10">{d.tabClusters}</span>
          {activeTab === "clusters" && (
            <motion.div
              layoutId="dataExplorerTabPill"
              className="absolute inset-0 rounded-full bg-zinc-200/80 dark:bg-zinc-800/90 shadow-sm"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
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
                    <div className="flex-1 h-2 rounded-full bg-zinc-100 dark:bg-zinc-800/80 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-emerald-700 dark:bg-emerald-400 transition-all duration-500"
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
                    <div className="flex-1 h-2 rounded-full bg-zinc-100 dark:bg-zinc-800/80 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-sky-700 dark:bg-sky-400 transition-all duration-500"
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
        <div className="space-y-6">
          {/* Organic Density Distribution Spline */}
          <div className="pt-2 pb-1" aria-hidden="true">
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mb-2">
              <span>Samplers (47.4%)</span>
              <span>Auditors (44.2%)</span>
              <span>Completers (8.4%)</span>
            </div>
            <svg viewBox="0 0 400 48" className="w-full h-12 overflow-visible" fill="none">
              <defs>
                <linearGradient id="densityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#0284c7" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.35" />
                </linearGradient>
                <linearGradient id="densityStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              <path
                d="M 0 44 C 60 10, 140 14, 200 24 C 270 34, 330 42, 370 44 C 385 45, 395 46, 400 46 L 400 48 L 0 48 Z"
                fill="url(#densityGrad)"
              />
              <path
                d="M 0 44 C 60 10, 140 14, 200 24 C 270 34, 330 42, 370 44 C 385 45, 395 46, 400 46"
                stroke="url(#densityStroke)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

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
