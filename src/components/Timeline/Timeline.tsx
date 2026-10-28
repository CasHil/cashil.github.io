import { TimelineItemData } from "../../types";
import TimelineItem from "./TimelineItem";

interface TimelineProps {
  data: TimelineItemData[];
}

export default function Timeline({ data }: TimelineProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10 my-8">
      {data.map((item, idx) => (
        <TimelineItem data={item} key={`${item.title}-${item.startDate}-${idx}`} />
      ))}
    </div>
  );
}
