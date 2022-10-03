import React from "react";
import TimelineItem from "./TimelineItem";

export default function Timeline(props) {
  const reverseTimeline = props.data.slice().reverse();
  console.log(reverseTimeline);

  return (
    props.data &&
    props.data.length > 0 && (
      <div>
        {reverseTimeline.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    )
  );
}
