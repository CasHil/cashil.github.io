import React from "react";
export default function Heading(props) {
  function header(size) {
    if (size === "h1" || !size) {
      return (
        <>
          <h1 className="text-5xl mt-5">{props.title}</h1>
          <br />
          <h1 className="text-5xl">-</h1>
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
