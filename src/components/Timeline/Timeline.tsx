import { TimelineItemData } from "../../types";
import TimelineItem from "./TimelineItem";

interface TimelineProps {
  data: TimelineItemData[];
}

export default function Timeline({ data }: TimelineProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="divide-y divide-zinc-200/80 dark:divide-zinc-800/80 space-y-8">
      {data.map((item, idx) => (
        <div key={`${item.title}-${item.startDate}-${idx}`} className="pt-8 first:pt-0">
          <TimelineItem data={item} />
        </div>
      ))}
    </div>
  );
}
