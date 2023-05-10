import React from "react";
import Heading from "../Heading/Heading";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="content">
      <Heading title="Hi 👋! I'm Casper" animated></Heading>
      <p>
        I'm a curious and creative MSc. Computer Science student at Delft
        University of Technology, with a specialization in Data Science. I'm
        constantly exploring new and innovative ways to use React, Vue,
        JavaScript, and TypeScript to build beautiful and functional web
        applications. When I'm not lost in lines of code, I love to spend my
        free time making music and playing chess.
      </p>
      <p>
        I'm also one of the founders of a computer science education company
        called{" "}
        <span>
          <a href="https://bitsized.nl/">Bitsized</a>
        </span>
        . I'm on a mission to make teaching computer science more accessible
        through an interactive platform. I believe that technology has the power
        to transform the world, and I'm passionate about sharing my knowledge
        and expertise with others.
      </p>
      <p>
        If you're passionate about tech, music or education, I'd love to connect
        and chat about our shared interests. Feel free to{" "}
        <span>
          <a className="intro-email" href="mailto:casperhildebrand@gmail.com">
            reach out
          </a>
        </span>
        !
      </p>
    </div>
  );
}
