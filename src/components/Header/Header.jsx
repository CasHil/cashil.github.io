import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <ul className="flex flex-row justify-center m-auto w-auto py-12 gap-5">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/education">Education</NavLink>
      </li>
      <li>
        <NavLink to="/work-experience">Work experience</NavLink>
      </li>
    </ul>
  );
}
