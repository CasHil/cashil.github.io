import React from "react";
import "./Timeline.css";
import TimelineItem from "./TimelineItem";

export default function Timeline(props) {
  return (
    props.data.length > 0 && (
      <div className="timeline-container mb-11">
        {props.data.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    )
  );
}
