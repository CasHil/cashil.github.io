import { NavLink } from "react-router-dom";

interface HeaderProps {
  handleClick?: () => void;
}

export default function Header({ handleClick }: HeaderProps) {
  return (
    <header>
      <nav className="grid place-content-center grid-columns-3 grid-rows-1 justify-center m-auto w-auto gap-5 mb-4">
        <li>
          <NavLink to="/" className="text-2xl md:text-3xl" onClick={handleClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            className="text-2xl md:text-3xl"
            onClick={handleClick}
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work-experience"
            className="text-2xl md:text-3xl"
            onClick={handleClick}
          >
            Work experience
          </NavLink>
        </li>
      </nav>
    </header>
  );
}
