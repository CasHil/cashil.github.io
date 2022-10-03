import React from "react";
import Heading from "../Heading/Heading";
import "./Intro.css";

export default function Intro() {
  return (
    <>
      <Heading title="Hi 👋! I'm Casper Hildebrand" animated></Heading>
      <p>
        I am currently a MSc. Computer Science student at the Delft University
        of Technology with a specialization in Data Science. My main interests
        lie in web development, data science and teaching. In my free time, I
        enjoy making music and playing chess. Feel free to{" "}
        <a className="intro-email" href="mailto:casperhildebrand@gmail.com">
          reach out
        </a>{" "}
        if you would like to chat!
      </p>
    </>
  );
}
