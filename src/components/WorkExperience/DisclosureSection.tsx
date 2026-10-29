import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DisclosureSectionProps {
  idPrefix?: string;
  title: string;
  badge?: string;
  summary: string;
  openLabel: string;
  closeLabel: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
  showBottomCollapse?: boolean;
}

export default function DisclosureSection({
  idPrefix,
  title,
  badge,
  summary,
  openLabel,
  closeLabel,
  defaultOpen = false,
  children,
  showBottomCollapse = true,
}: DisclosureSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const reactId = useId();
  const contentId = idPrefix ? `${idPrefix}-${reactId}` : reactId;

  return (
    <div className="rounded-xl border border-zinc-200/80 dark:border-white/10 bg-zinc-50/50 dark:bg-zinc-900/30 transition-colors">
      {/* Informative Header / Trigger Card */}
      <div className="p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 pb-2">
          <div className="flex items-center gap-2.5">
            <h3 className="font-display text-base sm:text-lg font-bold text-zinc-950 dark:text-white">
              {title}
            </h3>
            {badge && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {badge}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls={contentId}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded self-start sm:self-auto py-1"
          >
            <span>{isOpen ? closeLabel : openLabel}</span>
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-block text-[10px]"
              aria-hidden="true"
            >
              ▼
            </motion.span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[62ch]">
          {summary}
        </p>
      </div>

      {/* Smoothly Animated Drawer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-zinc-200/80 dark:border-white/10"
          >
            <div className="p-4 sm:p-6 bg-white/60 dark:bg-zinc-950/40">
              {children}

              {showBottomCollapse && (
                <div className="pt-6 mt-6 border-t border-zinc-200/60 dark:border-white/5 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors py-1"
                  >
                    <span>{closeLabel}</span>
                    <span aria-hidden="true">↑</span>
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
