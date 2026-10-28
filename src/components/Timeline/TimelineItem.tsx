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
    <article className="group space-y-2">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        {/* Role Title & Organization with Inline Logo */}
        <div className="flex items-start gap-2.5">
          {data.image && (
            <img
              src={`/images/${data.image.uri}`}
              alt={data.image.alt}
              className="h-7 w-7 rounded-[2px] object-contain bg-white p-0.5 border border-zinc-200 dark:border-zinc-700 shadow-xs shrink-0 mt-0.5"
              loading="lazy"
            />
          )}
          <div>
            <h2 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-tight">
              {data.title}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-0.5">
              {data.subtitle}
            </p>
          </div>
        </div>

        {/* Date & Status Meta */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 sm:text-right shrink-0">
          <span>
            {data.startDate} {toLabel} {data.endDate}
          </span>
          {data.current && (
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
              • {currentLabel}
            </span>
          )}
        </div>
      </div>

      {/* Narrative / Achievements */}
      {data.text && (
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[65ch] pt-1">
          {data.text}
        </p>
      )}

      {/* Tech Stack / Skills (Quiet Monospace Inline) */}
      {data.skills && data.skills.length > 0 && (
        <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-0.5">
          {data.skills.join(" · ")}
        </p>
      )}
    </article>
  );
}
