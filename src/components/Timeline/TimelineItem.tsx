import { TimelineItemData } from "../../types";

interface TimelineItemProps {
  data: TimelineItemData;
  index: number;
}

export default function TimelineItem({ data, index }: TimelineItemProps) {
  const isPresent = data.endDate.toLowerCase().includes("present");
  const trackNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative p-5 sm:p-6 my-4 rounded-2xl bg-[#141210]/80 border border-[#2b2722] hover:border-amber-500/40 transition-[border-color,box-shadow] duration-200 backdrop-blur-md shadow-xl shadow-black/40">
      <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-4">
        <div className="space-y-1.5 flex-1">
          {/* Track Number & Timecode */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#a1998b]">
            <span className="font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              TRACK {trackNumber}
            </span>
            <span aria-hidden="true">•</span>
            <span className="text-stone-400">
              {data.startDate} — {data.endDate}
            </span>
            {isPresent && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse motion-reduce:animate-none"
                  aria-hidden="true"
                />
                LIVE
              </span>
            )}
          </div>

          {/* Role Title */}
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#f4f1ea] group-hover:text-amber-300 transition-colors">
            {data.title}
          </h2>

          {/* Organization / Studio Label */}
          <div className="text-sm font-mono text-amber-400 font-medium">
            {data.subtitle}
          </div>
        </div>

        {/* Company / Studio Badge */}
        {data.image && (
          <div className="self-start sm:self-auto shrink-0">
            <img
              src={`/images/${data.image.uri}`}
              alt={data.image.alt || `${data.subtitle} logo`}
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-contain bg-[#1c1916] p-1.5 border border-[#38342e] shadow-md"
              loading="lazy"
              width="56"
              height="56"
            />
          </div>
        )}
      </div>

      {/* Liner Notes description */}
      {data.text && (
        <p className="mt-4 pt-3.5 border-t border-[#24211d] text-[#c7c1b5] text-sm sm:text-base leading-relaxed">
          {data.text}
        </p>
      )}
    </article>
  );
}
