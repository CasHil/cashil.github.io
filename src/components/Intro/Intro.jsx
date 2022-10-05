import React from "react";
import Heading from "../Heading/Heading";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="content">
      <Heading title="Hi 👋! I'm Casper" animated></Heading>
      <p>
        I'm a MSc. Computer Science student at the Delft University of
        Technology where I'm doing a specialization in Data Science. I ❤️
        working with React and Vue, together with JavaScript or TypeScript. In
        my free time, I enjoy making music and playing chess. Feel free to{" "}
        <a className="intro-email" href="mailto:casperhildebrand@gmail.com">
          reach out
        </a>
        !
      </p>
    </div>
  );
}
