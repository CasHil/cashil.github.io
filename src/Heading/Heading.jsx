import React from "react";
export default function Heading(props) {
  return (
    <>
      <h1 className="text-5xl">{props.title}</h1>
      <br />
      <h1 className="text-5xl">-</h1>
    </>
  );
}
