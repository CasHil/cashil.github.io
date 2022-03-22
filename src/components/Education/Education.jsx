import React from "react";
import Heading from "../Heading/Heading";
import Timeline from "../Timeline/Timeline";
import TimelineEducation from "../Timeline/TimelineEducation";

export default function Education() {
  return (
    <>
      <Heading title="Education"></Heading>
      <p>
        I am currently a MSc Computer Science student with a specialization in
        Data Science. Before this, I have done a bachelor in computer science
        and a minor in education.
      </p>
      <Timeline data={TimelineEducation}></Timeline>
    </>
  );
}
