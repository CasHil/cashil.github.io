import React from "react";
import Heading from "../Heading/Heading";
import Timeline from "../Timeline/Timeline";
import TimelineJobs from "../Timeline/TimelineJobs";

export default function WorkExperience() {
  return (
    <>
      <Heading title="Work experience"></Heading>
      <Timeline data={TimelineJobs}></Timeline>
    </>
  );
}
