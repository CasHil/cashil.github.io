import { TimelineItemData } from "../../types";

interface TimelineItemProps {
  data: TimelineItemData;
  index: number;
}

export default function TimelineItem({ data }: TimelineItemProps) {
  const isPresent = data.endDate.toLowerCase().includes("present");

  return (
    <article className="group relative p-5 sm:p-6 my-4 rounded-xl bg-[#ffffff] dark:bg-[#141210] border border-[#eaeaea] dark:border-[#24211d] hover:border-[#dedede] dark:hover:border-[#332f29] transition-all duration-150">
      <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-4">
        <div className="space-y-1.5 flex-1">
          {/* Date range */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#787774] dark:text-[#8a8376]">
            <span>
              {data.startDate} — {data.endDate}
            </span>
            {isPresent && (
              <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                • Current
              </span>
            )}
          </div>

          {/* Role Title in Geist */}
          <h2 className="text-lg sm:text-xl font-semibold text-[#111111] dark:text-[#f4f1ea] leading-snug">
            {data.title}
          </h2>

          {/* Organization / Subtitle */}
          <div className="text-sm text-[#5a5a57] dark:text-[#b5af9f]">
            {data.subtitle}
          </div>
        </div>

        {/* Company Logo Badge */}
        {data.image && (
          <div className="self-start sm:self-auto shrink-0">
            <img
              src={`/images/${data.image.uri}`}
              alt={data.image.alt || `${data.subtitle} logo`}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg object-contain bg-[#ffffff] dark:bg-[#1a1815] p-1 border border-[#eaeaea] dark:border-[#24211d]"
              loading="lazy"
              width="48"
              height="48"
            />
          </div>
        )}
      </div>

      {/* Description */}
      {data.text && (
        <p className="mt-4 pt-3.5 border-t border-[#eaeaea] dark:border-[#24211d] text-[#5a5a57] dark:text-[#b5af9f] text-sm sm:text-base leading-relaxed">
          {data.text}
        </p>
      )}
    </article>
  );
}
