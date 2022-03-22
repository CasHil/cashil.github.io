import React from "react";
import Heading from "../Heading/Heading";
import Timeline from "../Timeline/Timeline";
import TimelineJobs from "../Timeline/TimelineJobs";

export default function WorkExperience() {
  return (
    <>
      <Heading title="Work experience"></Heading>
      <p>
        I have been working in the industry next to my studies since september
        2019, where I learned about my love for frontend technologies. Below,
        you can find a timeline of all the jobs that I have worked at thus far.
      </p>
      <Timeline data={TimelineJobs}></Timeline>
    </>
  );
}
