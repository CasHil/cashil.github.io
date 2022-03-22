import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav className="flex flex-row justify-center m-auto w-auto py-12 gap-5">
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
