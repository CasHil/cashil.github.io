import { TimelineItemData } from "../../types";
import TimelineItem from "./TimelineItem";

interface TimelineProps {
  data: TimelineItemData[];
}

export default function Timeline({ data }: TimelineProps) {
  if (!data || data.length === 0) return null;

  const reversed = [...data].reverse();

  return (
    <div>
      {reversed.map((item, idx) => (
        <TimelineItem data={item} key={idx} />
      ))}
    </div>
  );
}
