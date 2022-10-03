import React from "react";
import Heading from "../Heading/Heading";
import Timeline from "../Timeline/Timeline";
import timelineJobs from "../Timeline/TimelineJobs";

export default function WorkExperience() {
  return (
    <div className="content">
      <Heading title="Work Experience"></Heading>
      <p>
        I have been working in the industry next to my studies since september
        2019, where I learned about my love for frontend technologies.
      </p>
      <Timeline data={timelineJobs}></Timeline>
    </div>
  );
}
