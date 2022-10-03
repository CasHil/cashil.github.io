import React from "react";
import TimelineItem from "./TimelineItem";

export default function Timeline(props) {
  return (
    props.data &&
    props.data.length > 0 && (
      <div>
        {props.data.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    )
  );
}
