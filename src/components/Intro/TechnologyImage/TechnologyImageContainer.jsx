import React from "react";

export default function TechnologyImageContainer(props) {
  return (
    <div className="flex flex-row flex-wrap gap-3 my-4">{props.children}</div>
  );
}
