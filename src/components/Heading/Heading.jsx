import React from "react";
import "./Heading.css";

export default function Heading(props) {
  function tailwindColor(color) {
    if (!color) {
      return "text-white";
    }
    return "text-" + color;
  }
  function header() {
    if (props.size === "h1" || !props.size) {
      return (
        <>
          <h1
            className={`text-3xl md:text-5xl mb-5 inline-block ${tailwindColor(
              props.color
            )} ${props.animated ? "intro-animation" : ""}`}
          >
            {props.title}
          </h1>
        </>
      );
    } else if (props.size === "h2") {
      return (
        <>
          <h2
            className={`text-2xl md:text-4xl sm:text-2xl mb-5 ${
              props.alignment === "center" ? "text-center" : ""
            } ${tailwindColor(props.color)}`}
          >
            {props.title}
          </h2>
          {props.divider && (
            <>
              <br />
              <h2 className="text-2xl md:text-4xl">-</h2>
            </>
          )}
        </>
      );
    } else if (props.size === "h3") {
      return (
        <>
          <h3
            className={`text-md md:text-xl ${
              props.alignment === "center" ? "text-center" : ""
            } ${tailwindColor(props.color)}`}
          >
            {props.title}
          </h3>
          {props.divider && (
            <>
              <br />
              <h3 className="text-md md:text-xl">-</h3>
            </>
          )}
        </>
      );
    }
  }

  return header();
}
