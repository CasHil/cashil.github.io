import Heading from "../Heading/Heading";
import "./TimelineItem.css";

export default function TimelineItem({ data }) {
  console.log(data);
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <div className="flex flex-row justify-around w-full">
          <div className="w-4/5 pr-2">
            <Heading size="h2" title={data.title} color="black"></Heading>
            <Heading size="h3" title={data.subtitle} color="black"></Heading>
            <span className="text-black">
              {data.startDate} - {data.endDate}
            </span>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/${data.image.uri}`}
            alt={data.image.alt}
            className="w-20 h-20"
          />
        </div>

        <p className="text-black w-full">{data.text}</p>
        <span className="circle" />
      </div>
    </div>
  );
}
