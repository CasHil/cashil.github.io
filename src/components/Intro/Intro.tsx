import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import "./Intro.css";

export default function Intro() {
  const { t } = useLanguage();
  const [activeArchNode, setActiveArchNode] = useState<string>("api");
  const [sandboxState, setSandboxState] = useState<"idle" | "running" | "passed">("idle");

  const tikkieSkills = ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL"];
  const bitsizedSkills = ["TypeScript", "React", "Node.js", "Docker", "Web Workers"];

  const handleRunSandbox = () => {
    if (sandboxState === "running") return;
    setSandboxState("running");
    setTimeout(() => {
      setSandboxState("passed");
    }, 550);
  };

  const selectedArch = t.intro.archNodes.find((n) => n.id === activeArchNode) || t.intro.archNodes[0];

  return (
    <div className="space-y-16">
      {/* Hero Section with Systems & Engineering Provenance */}
      <div className="space-y-6">
        {/* Authentic Engineering Provenance Tag (Anti-AI Cliché, Zero Generic Ping Dots) */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-white/10 text-zinc-700 dark:text-zinc-300 text-xs font-mono font-medium tracking-tight" data-tabular>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" aria-hidden="true" />
          <span>{t.intro.provenanceTag}</span>
        </div>

        {/* Editorial Hero Statement */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.18]">
          {t.intro.heroTitle}
        </h1>

        {/* Concise Scannable Bio */}
        <div className="space-y-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[58ch]">
          <p>{t.intro.bioParagraph1}</p>
          <p>{t.intro.bioParagraph2}</p>
        </div>

        {/* Technical Capabilities Matrix (Engineered Depth over Generic Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {t.intro.signals.map((sig) => (
            <div
              key={sig.title}
              className="rounded-xl p-3.5 sm:p-4 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-xs border border-zinc-200/80 dark:border-white/[0.08] hover:border-emerald-600/30 dark:hover:border-emerald-400/25 transition-all shadow-xs group"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  {sig.tag}
                </span>
                <span className="text-zinc-300 dark:text-zinc-700 font-mono text-xs">/0{t.intro.signals.indexOf(sig) + 1}</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white tracking-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                {sig.title}
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-snug">
                {sig.description}
              </p>
            </div>
          ))}
        </div>

        {/* Responsive Deliberate Precision Button Pair */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 text-sm">
          <Link
            to="/cv"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md hover:bg-emerald-800 dark:hover:bg-emerald-300 dark:hover:text-zinc-950 active:scale-[0.98] transition-all duration-150 ring-1 ring-zinc-900/10 dark:ring-white/20 min-h-[44px]"
          >
            <span>{t.intro.viewCv}</span>
            <span className="font-mono text-zinc-400 dark:text-zinc-500 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              →
            </span>
          </Link>
          <Link
            to="/work-experience"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-zinc-300/80 dark:border-white/15 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-medium text-xs sm:text-sm hover:border-emerald-600/50 dark:hover:border-emerald-400/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-[0.98] transition-all duration-150 min-h-[44px]"
          >
            <span>{t.intro.exploreWork}</span>
            <span className="font-mono text-zinc-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Featured Engineering & Research (Structured Editorial Showcases) */}
      <div className="pt-10 border-t border-zinc-200/80 dark:border-white/10 space-y-8">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
            {t.intro.featuredHeading}
          </h2>
          {t.intro.featuredSubtitle && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {t.intro.featuredSubtitle}
            </p>
          )}
        </div>

        <div className="space-y-8">
          {/* 1. Tikkie Business: Production Fintech & Interactive Architecture Flow */}
          <article className="rounded-2xl p-6 sm:p-7 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xs border border-zinc-200/90 dark:border-white/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-emerald-600/30 dark:hover:border-emerald-400/20 transition-all space-y-5 group">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  {t.intro.tikkieTag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-0.5 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {t.intro.tikkieTitle}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {t.intro.tikkieSubtitle}
                </p>
              </div>
              <Link
                to="/work-experience"
                className="group/link inline-flex items-center gap-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors self-start sm:self-auto py-1"
              >
                <span>{t.intro.tikkieLink}</span>
                <span className="font-mono transition-transform group-hover/link:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[58ch]">
              {t.intro.tikkieDescription}
            </p>

            {/* Bespoke Interactive Architecture Flowchart */}
            <div className="rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-950/50 p-4 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-zinc-900 dark:text-white tracking-tight">
                    {t.intro.archDiagramTitle}
                  </span>
                  <span className="block text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                    {t.intro.archDiagramSubtitle}
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  Interactive
                </span>
              </div>

              {/* Node Pipeline Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1" role="tablist" aria-label="Architecture Pipeline Nodes">
                {t.intro.archNodes.map((node, i) => {
                  const isActive = activeArchNode === node.id;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveArchNode(node.id)}
                      className={`relative text-left p-2.5 rounded-lg border transition-all text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                        isActive
                          ? "bg-white dark:bg-zinc-900 border-emerald-600/50 dark:border-emerald-400/50 shadow-xs ring-1 ring-emerald-500/20"
                          : "bg-white/50 dark:bg-zinc-900/30 border-zinc-200/70 dark:border-white/5 hover:border-zinc-300 dark:hover:border-zinc-700"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-500 mb-0.5">
                        <span>0{i + 1}</span>
                        <span className="truncate ml-1">{node.role}</span>
                      </div>
                      <div className={`font-semibold truncate ${isActive ? "text-emerald-700 dark:text-emerald-400" : "text-zinc-800 dark:text-zinc-200"}`}>
                        {node.label}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Node Detail Drawer */}
              <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs text-zinc-600 dark:text-zinc-300 flex items-start gap-2">
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold shrink-0">↳</span>
                <p className="leading-relaxed">
                  <strong className="text-zinc-900 dark:text-white font-medium">{selectedArch.label}:</strong>{" "}
                  {selectedArch.desc}
                </p>
              </div>
            </div>

            {/* Impact Highlights */}
            {t.intro.tikkieHighlights && (
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-[58ch]">
                {t.intro.tikkieHighlights.map((point, idx) => {
                  const match = point.match(/^\*\*(.*?)\*\*:\s*(.*)$/);
                  return (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>
                        {match ? (
                          <>
                            <strong className="font-semibold text-zinc-950 dark:text-zinc-100">{match[1]}:</strong>{" "}
                            {match[2]}
                          </>
                        ) : (
                          point
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* Tactile Tech Stack Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mr-1">Stack:</span>
              {tikkieSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-white/10 hover:border-emerald-500/40 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>

          {/* 2. Bitsized: 0-to-1 Engineering & Interactive Code Sandbox Runner */}
          <article className="rounded-2xl p-6 sm:p-7 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xs border border-zinc-200/90 dark:border-white/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-emerald-600/30 dark:hover:border-emerald-400/20 transition-all space-y-5 group">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  {t.intro.bitsizedTag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-0.5 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {t.intro.bitsizedTitle}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {t.intro.bitsizedSubtitle}
                </p>
              </div>
              <Link
                to="/work-experience"
                className="group/link inline-flex items-center gap-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors self-start sm:self-auto py-1"
              >
                <span>{t.intro.bitsizedLink}</span>
                <span className="font-mono transition-transform group-hover/link:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[58ch]">
              {t.intro.bitsizedDescription}
            </p>

            {/* Interactive Code Sandbox Preview Window */}
            <div className="rounded-xl border border-zinc-300/80 dark:border-zinc-800 bg-zinc-950 text-zinc-200 overflow-hidden shadow-xs">
              {/* Terminal Window Chrome */}
              <div className="flex items-center justify-between px-3.5 py-2 border-b border-zinc-800 bg-zinc-900/90 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] text-zinc-400 font-medium">{t.intro.sandboxInteractiveTitle}</span>
                </div>
                <button
                  type="button"
                  onClick={handleRunSandbox}
                  disabled={sandboxState === "running"}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-semibold transition-all active:scale-95 disabled:opacity-60"
                >
                  <span>{sandboxState === "running" ? "⏳" : "▶"}</span>
                  <span>{sandboxState === "running" ? t.intro.sandboxRunning : t.intro.sandboxRunAction}</span>
                </button>
              </div>

              {/* Code Snippet */}
              <div className="p-3.5 font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto no-scrollbar">
                <div className="text-zinc-500">// Bitsized isolated runtime test runner</div>
                <div><span className="text-sky-400">const</span> sandbox = <span className="text-sky-400">new</span> <span className="text-amber-300">IsolatedWorker</span>();</div>
                <div><span className="text-sky-400">await</span> sandbox.<span className="text-emerald-400">execute</span>(<span className="text-amber-200">`assert(fibonacci(7) === 13)`</span>);</div>
              </div>

              {/* Live Output Log */}
              <AnimatePresence>
                {sandboxState !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-3.5 py-2.5 border-t border-zinc-800/80 bg-zinc-900/50 font-mono text-xs flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span className="text-zinc-300">
                        {sandboxState === "running" ? t.intro.sandboxRunning : "3/3 assertions passed (18ms) in isolated Web Worker"}
                      </span>
                    </div>
                    {sandboxState === "passed" && (
                      <span className="text-[11px] text-emerald-400 font-semibold uppercase">
                        {t.intro.sandboxStatusSuccess}
                      </span>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Impact Highlights */}
            {t.intro.bitsizedHighlights && (
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-[58ch]">
                {t.intro.bitsizedHighlights.map((point, idx) => {
                  const match = point.match(/^\*\*(.*?)\*\*:\s*(.*)$/);
                  return (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>
                        {match ? (
                          <>
                            <strong className="font-semibold text-zinc-950 dark:text-zinc-100">{match[1]}:</strong>{" "}
                            {match[2]}
                          </>
                        ) : (
                          point
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* Tactile Tech Stack Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mr-1">Stack:</span>
              {bitsizedSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-white/10 hover:border-emerald-500/40 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>

          {/* 3. Master's Thesis: Empirical Research Telemetry Card */}
          <article className="rounded-2xl p-6 sm:p-7 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xs border border-zinc-200/90 dark:border-white/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-emerald-600/30 dark:hover:border-emerald-400/20 transition-all space-y-5 group">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  {t.intro.thesisTag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white mt-0.5 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {t.intro.thesisTitle}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {t.intro.thesisSubtitle}
                </p>
              </div>
              <Link
                to="/education#telemetry"
                className="group/link inline-flex items-center gap-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors self-start sm:self-auto py-1"
              >
                <span>{t.intro.thesisLink}</span>
                <span className="font-mono transition-transform group-hover/link:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-[58ch]">
              {t.intro.thesisDescription}
            </p>

            {/* Mini Telemetry Snapshot */}
            <div className="rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-950/50 p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-zinc-900 dark:text-white font-mono">174,988 Enrolled Learners · 14 MOOC Runs</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-mono font-semibold">+16.7% Career Transition Gap</span>
              </div>
              
              {/* Stacked 3-Cluster Distribution Bar */}
              <div className="space-y-1.5" aria-label="Learner Cluster Distribution">
                <div className="h-3 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 flex overflow-hidden">
                  <div style={{ width: "47.4%" }} className="h-full bg-amber-500/90" title="Samplers (47.4%)" />
                  <div style={{ width: "44.2%" }} className="h-full bg-sky-500/90" title="Auditors (44.2%)" />
                  <div style={{ width: "8.4%" }} className="h-full bg-emerald-500/90" title="Completers (8.4%)" />
                </div>
                <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    Samplers (47.4%)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    Auditors (44.2%)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Completers (8.4%)
                  </span>
                </div>
              </div>
            </div>

            {/* Impact Highlights */}
            {t.intro.thesisHighlights && (
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-[58ch]">
                {t.intro.thesisHighlights.map((point, idx) => {
                  const match = point.match(/^\*\*(.*?)\*\*:\s*(.*)$/);
                  return (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>
                        {match ? (
                          <>
                            <strong className="font-semibold text-zinc-950 dark:text-zinc-100">{match[1]}:</strong>{" "}
                            {match[2]}
                          </>
                        ) : (
                          point
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* Methods Stack Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mr-1">Methods:</span>
              {t.intro.thesisSkills.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-white/10 hover:border-emerald-500/40 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
