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
              className="h-8 w-8 rounded-lg object-contain bg-white p-1 ring-1 ring-zinc-200/80 dark:ring-white/10 shadow-xs shrink-0 mt-0.5"
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
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 sm:text-right shrink-0" data-tabular>
          <span>
            {data.startDate} {toLabel} {data.endDate}
          </span>
          {data.current && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {currentLabel}
            </span>
          )}
        </div>
      </div>

      {/* Narrative / Achievements */}
      {data.text && (
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[58ch] pt-1">
          {data.text}
        </p>
      )}

      {/* Tech Stack / Skills (Tactile Micro-Pills) */}
      {data.skills && data.skills.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-300 border border-zinc-200/50 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
