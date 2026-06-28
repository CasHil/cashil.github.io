import Heading from "../Heading/Heading";
import { TimelineItemData } from "../../types";

interface TimelineItemProps {
  data: TimelineItemData;
}

export default function TimelineItem({ data }: TimelineItemProps) {
  return (
    <div className="bg-white p-5 my-5 shadow-xl shadow-black divide-y divide-gray-600">
      <div className="flex flex-row justify-between pb-3">
        <div>
          <Heading size="h2" title={data.title} color="black" />
          <Heading size="h3" title={data.subtitle} color="black" />
          <span className="text-black">
            {data.startDate} - {data.endDate}
          </span>
        </div>
        {data.image && (
          <img
            src={`${process.env.PUBLIC_URL}/images/${data.image.uri}`}
            alt={data.image.alt}
            className="w-20 h-20 block float-right"
          />
        )}
      </div>
      {data.text && <p className="text-black pt-3">{data.text}</p>}
    </div>
  );
}
