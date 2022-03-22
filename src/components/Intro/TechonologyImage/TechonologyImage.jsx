import React from "react";

export default function TechonologyImage(props) {
  return (
    <a
      href={
        props.link ? props.link : "https://en.wikipedia.org/wiki/" + props.wiki
      }
    >
      <img
        src={process.env.PUBLIC_URL + "/images/" + props.src}
        alt={props.alt}
        className="w-10 h-10"
        style={{ filter: "invert(1)" }}
      />
    </a>
  );
}
