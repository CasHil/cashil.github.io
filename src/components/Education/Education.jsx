import React from "react";
import Heading from "../Heading/Heading";
import Timeline from "../Timeline/Timeline";
import TimelineEducation from "../Timeline/TimelineEducation";

export default function Education() {
  return (
    <div className="content">
      <Heading title="Education"></Heading>
      <Timeline data={TimelineEducation}></Timeline>
    </div>
  );
}
