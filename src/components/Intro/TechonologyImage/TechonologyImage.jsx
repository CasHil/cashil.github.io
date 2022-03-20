import React from "react";

export default function TechonologyImage(props) {
  return (
    <img
      src={process.env.PUBLIC_URL + "/images/" + props.src}
      alt={props.alt}
      className="w-10 h-10"
      style={{ filter: "invert(1)" }}
    />
  );
}
