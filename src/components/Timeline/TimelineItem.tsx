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
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-medium">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span>{currentLabel}</span>
            </span>
          )}
        </div>
      </div>

      {/* Narrative / Achievements */}
      {data.text && (
        data.text.includes("\n") ? (
          <ul className="space-y-1.5 pt-1 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-[58ch]">
            {data.text.split("\n").map((line, idx) => {
              const clean = line.replace(/^[•\-*]\s*/, "");
              const match = clean.match(/^\*\*(.*?)\*\*:\s*(.*)$/);
              return (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>
                    {match ? (
                      <>
                        <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{match[1]}:</strong>{" "}
                        {match[2]}
                      </>
                    ) : (
                      clean
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[58ch] pt-1">
            {data.text}
          </p>
        )
      )}

      {/* Tech Stack / Skills (Typographic Stack Stream) */}
      {data.skills && data.skills.length > 0 && (
        <div className="pt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-xs">
          <span className="text-zinc-600 dark:text-zinc-400 uppercase tracking-widest text-[10px] font-semibold">
            Stack:
          </span>
          <span className="text-zinc-700 dark:text-zinc-300">
            {data.skills.map((skill, idx) => (
              <span key={skill}>
                {idx > 0 && <span className="mx-1.5 text-emerald-600/40 dark:text-emerald-400/40">·</span>}
                <span className="hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">{skill}</span>
              </span>
            ))}
          </span>
        </div>
      )}
    </article>
  );
}
