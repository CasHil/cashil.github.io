import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

interface DataExplorerProps {
  headingLevel?: "h2" | "h3";
}

export default function DataExplorer({ headingLevel = "h3" }: DataExplorerProps) {
  const [activeTab, setActiveTab] = useState<"motivations" | "clusters" | "trajectory">("motivations");
  const [selectedWeek, setSelectedWeek] = useState<number>(2);
  const [spotlightCluster, setSpotlightCluster] = useState<"all" | "samplers" | "auditors" | "completers">("all");
  const [selectedMotivation, setSelectedMotivation] = useState<number>(0);

  const { t } = useLanguage();
  const d = t.dataExplorer;
  const HeadingTag = headingLevel;

  const motivationData = [
    {
      id: "career",
      label: d.motivations.careerLabel,
      women: 58.2,
      men: 41.5,
      delta: d.motivations.careerDelta,
      deltaType: "women-higher" as const,
      explanation: d.motivations.careerExplanation,
    },
    {
      id: "leisure",
      label: d.motivations.leisureLabel,
      women: 17.7,
      men: 38.7,
      delta: d.motivations.leisureDelta,
      deltaType: "men-higher" as const,
      explanation: d.motivations.leisureExplanation,
    },
    {
      id: "degree",
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
      id: "samplers" as const,
      name: d.clusters.samplersName,
      share: "47.4%",
      shareNum: 47.4,
      behavior: d.clusters.samplersBehavior,
      description: d.clusters.samplersDesc,
      color: "#f59e0b",
      badgeColor: "bg-amber-500",
    },
    {
      id: "auditors" as const,
      name: d.clusters.auditorsName,
      share: "44.2%",
      shareNum: 44.2,
      behavior: d.clusters.auditorsBehavior,
      description: d.clusters.auditorsDesc,
      color: "#0284c7",
      badgeColor: "bg-sky-500",
    },
    {
      id: "completers" as const,
      name: d.clusters.completersName,
      share: "8.4%",
      shareNum: 8.4,
      behavior: d.clusters.completersBehavior,
      description: d.clusters.completersDesc,
      color: "#10b981",
      badgeColor: "bg-emerald-500",
    },
  ];

  const weeks = d.trajectory.weeks;
  const currentWeekData = weeks.find((w) => w.week === selectedWeek) || weeks[1];

  // SVG retention chart coordinate calculations (viewBox 0 0 600 220)
  const chartWidth = 560;
  const chartHeight = 160;
  const originX = 35;
  const originY = 25;

  const getX = (weekNum: number) => originX + ((weekNum - 1) / (weeks.length - 1)) * chartWidth;
  const getY = (val: number) => originY + chartHeight - (val / 100) * chartHeight;

  const buildPath = (key: "samplers" | "auditors" | "completers") => {
    return weeks
      .map((w, idx) => {
        const x = getX(w.week);
        const y = getY(w[key]);
        return `${idx === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ");
  };

  const samplersPath = buildPath("samplers");
  const auditorsPath = buildPath("auditors");
  const completersPath = buildPath("completers");

  return (
    <div className="space-y-6">
      {/* Header and Provenance */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <HeadingTag className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white tracking-tight">
            {d.title}
          </HeadingTag>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200/80 dark:border-white/10" data-tabular>
            {d.badge}
          </span>
        </div>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[65ch]">
          {d.subtitle}
        </p>
      </div>

      {/* High-Level Overview Metrics (Flat Editorial Grid with Tabular Numerals) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-5 border-y border-zinc-200/80 dark:border-white/10" data-tabular>
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

      {/* Tab Navigation (Responsive Editorial Tab Switcher) */}
      <div className="flex items-center gap-4 sm:gap-6 border-b border-zinc-200/80 dark:border-white/10 pb-2 overflow-x-auto no-scrollbar">
        <button
          type="button"
          onClick={() => setActiveTab("motivations")}
          className={`relative pb-2 text-xs sm:text-sm font-medium transition-colors shrink-0 ${
            activeTab === "motivations"
              ? "text-zinc-950 dark:text-white font-semibold"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
        >
          <span>{d.tabMotivations}</span>
          {activeTab === "motivations" && (
            <motion.div
              layoutId="dataExplorerTabIndicator"
              className="absolute -bottom-[9px] left-0 right-0 h-[2px] bg-emerald-600 dark:bg-emerald-400"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("trajectory")}
          className={`relative pb-2 text-xs sm:text-sm font-medium transition-colors shrink-0 ${
            activeTab === "trajectory"
              ? "text-zinc-950 dark:text-white font-semibold"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
        >
          <span>{d.tabTrajectory}</span>
          {activeTab === "trajectory" && (
            <motion.div
              layoutId="dataExplorerTabIndicator"
              className="absolute -bottom-[9px] left-0 right-0 h-[2px] bg-emerald-600 dark:bg-emerald-400"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("clusters")}
          className={`relative pb-2 text-xs sm:text-sm font-medium transition-colors shrink-0 ${
            activeTab === "clusters"
              ? "text-zinc-950 dark:text-white font-semibold"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
        >
          <span>{d.tabClusters}</span>
          {activeTab === "clusters" && (
            <motion.div
              layoutId="dataExplorerTabIndicator"
              className="absolute -bottom-[9px] left-0 right-0 h-[2px] bg-emerald-600 dark:bg-emerald-400"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "motivations" && (
        <div className="space-y-6">
          {/* Motivation Category Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {motivationData.map((item, idx) => {
              const isSelected = selectedMotivation === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedMotivation(idx)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "bg-white dark:bg-zinc-900/90 border-emerald-600/50 dark:border-emerald-400/50 shadow-xs ring-1 ring-emerald-500/20"
                      : "bg-zinc-50/70 dark:bg-zinc-900/30 border-zinc-200/80 dark:border-white/5 hover:border-zinc-300 dark:hover:border-zinc-700"
                  }`}
                >
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 block mb-0.5">
                    {item.deltaType === "women-higher" ? "Female Skew" : "Male Skew"}
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white truncate">
                    {item.label}
                  </div>
                  <div className="mt-1 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                    {item.delta}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Comparative Bar Display */}
          <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 space-y-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white">
                {motivationData[selectedMotivation].label}
              </h4>
              <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                {d.statSignificanceValue}
              </span>
            </div>

            <div className="space-y-3 pt-1">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-700 dark:text-zinc-300 font-semibold">{d.womenLabel}</span>
                  <span className="font-bold text-zinc-950 dark:text-white" data-tabular>{motivationData[selectedMotivation].women}%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${motivationData[selectedMotivation].women}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-full rounded-full bg-emerald-600 dark:bg-emerald-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-700 dark:text-zinc-300 font-semibold">{d.menLabel}</span>
                  <span className="font-bold text-zinc-950 dark:text-white" data-tabular>{motivationData[selectedMotivation].men}%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${motivationData[selectedMotivation].men}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-full rounded-full bg-sky-600 dark:bg-sky-400"
                  />
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
              {motivationData[selectedMotivation].explanation}
            </p>
          </div>

          {/* Research Takeaway Callout */}
          <div className="border-l-2 border-emerald-700 dark:border-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-r-xl text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[62ch]">
            <strong className="text-zinc-950 dark:text-white font-semibold">{d.researchTakeawayTitle}</strong>{" "}
            {d.researchTakeawayText}
          </div>
        </div>
      )}

      {/* Tab 2: 8-Week Clickstream Trajectory (Core Machine Learning Visualization) */}
      {activeTab === "trajectory" && (
        <div className="space-y-6">
          {/* Cohort Filter Selector Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5" role="group" aria-label="Cohort Trajectory Filter">
              <button
                type="button"
                onClick={() => setSpotlightCluster("all")}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                  spotlightCluster === "all"
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {d.trajectory.allClusters}
              </button>
              {clusterData.map((cluster) => (
                <button
                  key={cluster.id}
                  type="button"
                  onClick={() => setSpotlightCluster(cluster.id)}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono transition-all ${
                    spotlightCluster === cluster.id
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cluster.color }} />
                  <span>{cluster.name}</span>
                </button>
              ))}
            </div>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              N = 174,988
            </span>
          </div>

          {/* Interactive Multi-Line SVG Retention Chart */}
          <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/60 shadow-xs space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span className="font-semibold text-zinc-900 dark:text-white">{d.trajectory.title}</span>
              <span>Week 1 – Week 8</span>
            </div>

            {/* Responsive SVG Chart */}
            <div className="relative w-full aspect-[2.6/1] min-h-[170px] select-none">
              <svg viewBox="0 0 630 210" className="w-full h-full overflow-visible" fill="none">
                {/* Horizontal Gridlines */}
                {[100, 75, 50, 25, 0].map((val) => {
                  const y = getY(val);
                  return (
                    <g key={val}>
                      <line x1={originX} y1={y} x2={originX + chartWidth} y2={y} stroke="currentColor" className="text-zinc-200/80 dark:text-zinc-800" strokeWidth="1" strokeDasharray="3 3" />
                      <text x={originX - 6} y={y + 3.5} textAnchor="end" className="text-[10px] font-mono fill-zinc-400 dark:fill-zinc-500">{val}%</text>
                    </g>
                  );
                })}

                {/* Vertical Week Guidelines */}
                {weeks.map((w) => {
                  const x = getX(w.week);
                  const isCurrent = w.week === selectedWeek;
                  return (
                    <g key={w.week}>
                      <line x1={x} y1={originY} x2={x} y2={originY + chartHeight} stroke="currentColor" className={isCurrent ? "text-emerald-500/50" : "text-zinc-200/40 dark:text-zinc-800/40"} strokeWidth={isCurrent ? "1.5" : "1"} />
                      <text x={x} y={originY + chartHeight + 16} textAnchor="middle" className={`text-[11px] font-mono ${isCurrent ? "font-bold fill-emerald-600 dark:fill-emerald-400" : "fill-zinc-500"}`}>
                        W{w.week}
                      </text>
                    </g>
                  );
                })}

                {/* Trajectory 1: Samplers (Amber) */}
                <path
                  d={samplersPath}
                  stroke="#f59e0b"
                  strokeWidth={spotlightCluster === "samplers" || spotlightCluster === "all" ? 2.5 : 1}
                  strokeOpacity={spotlightCluster === "samplers" || spotlightCluster === "all" ? 1 : 0.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Trajectory 2: Auditors (Sky) */}
                <path
                  d={auditorsPath}
                  stroke="#0284c7"
                  strokeWidth={spotlightCluster === "auditors" || spotlightCluster === "all" ? 2.5 : 1}
                  strokeOpacity={spotlightCluster === "auditors" || spotlightCluster === "all" ? 1 : 0.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Trajectory 3: Completers (Emerald) */}
                <path
                  d={completersPath}
                  stroke="#10b981"
                  strokeWidth={spotlightCluster === "completers" || spotlightCluster === "all" ? 2.5 : 1}
                  strokeOpacity={spotlightCluster === "completers" || spotlightCluster === "all" ? 1 : 0.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Interactive Scrubber Indicator on Chart */}
                {(() => {
                  const x = getX(selectedWeek);
                  const ySamplers = getY(currentWeekData.samplers);
                  const yAuditors = getY(currentWeekData.auditors);
                  const yCompleters = getY(currentWeekData.completers);

                  return (
                    <g className="transition-all duration-200">
                      <circle cx={x} cy={ySamplers} r="4" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
                      <circle cx={x} cy={yAuditors} r="4" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
                      <circle cx={x} cy={yCompleters} r="4" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                    </g>
                  );
                })()}
              </svg>
            </div>

            {/* Interactive Week Slider & Buttons */}
            <div className="pt-2 border-t border-zinc-200/70 dark:border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span>{d.trajectory.scrubberPrompt}</span>
                <span className="font-bold text-zinc-900 dark:text-white">Week {selectedWeek}</span>
              </div>
              <div className="grid grid-cols-8 gap-1">
                {weeks.map((w) => {
                  const isSelected = selectedWeek === w.week;
                  return (
                    <button
                      key={w.week}
                      type="button"
                      onClick={() => setSelectedWeek(w.week)}
                      className={`py-2 rounded-lg text-xs font-mono transition-all min-h-[36px] ${
                        isSelected
                          ? "bg-emerald-600 dark:bg-emerald-500 text-white font-bold shadow-xs scale-105"
                          : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                      }`}
                    >
                      W{w.week}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Week Telemetry Telemetry Observation Card */}
            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-white/5 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="font-bold text-zinc-900 dark:text-white">Week {selectedWeek} Cohort Retention:</span>
                <div className="flex items-center gap-3">
                  <span className="text-amber-700 dark:text-amber-400">Samplers: {currentWeekData.samplers}%</span>
                  <span className="text-sky-700 dark:text-sky-400">Auditors: {currentWeekData.auditors}%</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">Completers: {currentWeekData.completers}%</span>
                </div>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {currentWeekData.note}
              </p>
            </div>
          </div>

          {/* Research Insight */}
          <div className="border-l-2 border-emerald-700 dark:border-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-r-xl text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[62ch]">
            <strong className="text-zinc-950 dark:text-white font-semibold">{d.trajectory.insightTitle}</strong>{" "}
            {d.trajectory.insightText}
          </div>
        </div>
      )}

      {/* Tab 3: Clusters Overview */}
      {activeTab === "clusters" && (
        <div className="space-y-6">
          {/* Stacked Cluster Share Overview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span>Samplers (47.4%)</span>
              <span>Auditors (44.2%)</span>
              <span>Completers (8.4%)</span>
            </div>
            <div className="h-4 w-full rounded-full bg-zinc-100 dark:bg-zinc-800 flex overflow-hidden">
              <div style={{ width: "47.4%" }} className="h-full bg-amber-500" title="Samplers (47.4%)" />
              <div style={{ width: "44.2%" }} className="h-full bg-sky-500" title="Auditors (44.2%)" />
              <div style={{ width: "8.4%" }} className="h-full bg-emerald-500" title="Completers (8.4%)" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {clusterData.map((cluster) => (
              <div
                key={cluster.name}
                className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-zinc-900 dark:text-white">
                    {cluster.name}
                  </span>
                  <span className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300" data-tabular>
                    {cluster.share}
                  </span>
                </div>
                <div className="pt-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                    <span className={`w-2 h-2 rounded-full ${cluster.badgeColor}`} />
                    <span>{cluster.behavior}</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-normal">
                  {cluster.description}
                </p>
              </div>
            ))}
          </div>

          <div className="border-l-2 border-emerald-600 dark:border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20 p-4 rounded-r-xl text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[62ch]">
            <strong className="text-zinc-900 dark:text-white font-semibold">{d.methodologyTitle}</strong>{" "}
            {d.methodologyText}
          </div>
        </div>
      )}

      {/* Thesis Reference Footer with Responsive Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-zinc-200 dark:border-white/10 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <span>{d.authorLabel} · {d.facultyLabel}</span>
        <a
          href={d.repositoryLink}
          target="_blank"
          rel="noreferrer"
          className="text-emerald-700 dark:text-emerald-400 hover:underline font-semibold transition-colors self-start sm:self-auto py-1"
        >
          {d.repositoryText}
        </a>
      </div>
    </div>
  );
}
