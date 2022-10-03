import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav className="grid place-content-center grid-columns-3 grid-rows-1 justify-center m-auto w-auto gap-5 mb-4">
        <li>
          <NavLink to="/" className="text-lg md:text-3xl">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" className="text-lg md:text-3xl">
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/work-experience" className="text-lg md:text-3xl">
            Work experience
          </NavLink>
        </li>
      </nav>
    </header>
  );
}
