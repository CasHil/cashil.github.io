import React from "react";

export default function FooterImage(props) {
  return (
    <a href={props.href}>
      <img
        className=" w-10 h-10"
        src={process.env.PUBLIC_URL + "/images/" + props.src}
        alt={props.alt}
      ></img>
    </a>
  );
}
