import React from "react";
import "./Heading.css";

export default function Heading(props) {
  function header(size) {
    if (size === "h1" || !size) {
      return (
        <>
          <h1
            className={`text-5xl mt-5 inline-block ${
              props.animated ? "intro-animation" : ""
            }`}
          >
            {props.title}
          </h1>
        </>
      );
    } else if (size === "h2") {
      return (
        <>
          <h2 className="text-4xl mt-5">{props.title}</h2>
          <br />
          <h2 className="text-4xl">-</h2>
        </>
      );
    }
  }
  return header(props.size);
}
