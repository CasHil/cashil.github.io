import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
export default function Header(props) {
  return (
    <header>
      <nav className="grid place-content-center grid-columns-3 grid-rows-1 justify-center m-auto w-auto gap-5 mb-4">
        <li>
          <NavLink
            to="/"
            className="text-2xl md:text-3xl"
            onClick={props.handleClick ? props.handleClick : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            className="text-2xl md:text-3xl"
            onClick={props.handleClick ? props.handleClick : ""}
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work-experience"
            className="text-2xl md:text-3xl"
            onClick={props.handleClick ? props.handleClick : ""}
          >
            Work experience
          </NavLink>
        </li>
      </nav>
    </header>
  );
}
