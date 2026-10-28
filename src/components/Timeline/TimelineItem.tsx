import { TimelineItemData } from "../../types";
import { useLanguage } from "../../context/LanguageContext";

interface TimelineItemProps {
  data: TimelineItemData;
}

export default function TimelineItem({ data }: TimelineItemProps) {
  const { language } = useLanguage();
  const toLabel = language === "nl" ? "tot" : "to";
  const currentLabel = language === "nl" ? "Huidig" : "Current";

  return (
    <article className="relative group space-y-2">
      {/* Timeline Node Dot */}
      <span
        className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-3.5 w-3.5 items-center justify-center"
        aria-hidden="true"
      >
        <span
          className={`h-2.5 w-2.5 rounded-full transition-all ${
            data.current
              ? "bg-emerald-600 dark:bg-emerald-400 ring-4 ring-emerald-100 dark:ring-emerald-950/60"
              : "bg-zinc-400 dark:bg-zinc-500 ring-4 ring-zinc-100 dark:ring-zinc-900 group-hover:bg-zinc-600 dark:group-hover:bg-zinc-300"
          }`}
        />
      </span>

      <div className="space-y-1">
        {/* Date & Status Meta */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <span>
            {data.startDate} {toLabel} {data.endDate}
          </span>
          {data.current && (
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold tracking-wide">
              • {currentLabel}
            </span>
          )}
        </div>

        {/* Role Title & Organization with Inline Logo */}
        <div className="flex items-start gap-2.5 pt-0.5">
          {data.image && (
            <img
              src={`/images/${data.image.uri}`}
              alt={data.image.alt}
              className="h-8 w-8 rounded-[2px] object-contain bg-white p-0.5 border border-zinc-200 dark:border-zinc-700 shadow-xs shrink-0 mt-0.5"
              loading="lazy"
            />
          )}
          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-tight">
              {data.title}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 mt-0.5">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* Narrative / Achievements */}
        {data.text && (
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1.5 max-w-[65ch]">
            {data.text}
          </p>
        )}

        {/* Tech Stack / Skills (Clean Inline Monospace, No Pill Clutter) */}
        {data.skills && data.skills.length > 0 && (
          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1.5 leading-relaxed">
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">Stack:</span>{" "}
            {data.skills.join(" · ")}
          </p>
        )}
      </div>
    </article>
  );
}
