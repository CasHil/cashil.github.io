import { NavLink } from "react-router-dom";

interface HeaderProps {
  handleClick?: () => void;
  orientation?: "horizontal" | "vertical";
}

export default function Header({
  handleClick,
  orientation = "vertical",
}: HeaderProps) {
  const navItems = [
    { to: "/", label: "01. HOME" },
    { to: "/education", label: "02. EDUCATION" },
    { to: "/work-experience", label: "03. EXPERIENCE" },
  ];

  const isHoriz = orientation === "horizontal";

  return (
    <nav
      className={`w-full ${isHoriz ? "" : "mt-4"}`}
      aria-label="Studio navigation"
    >
      <ul
        className={`flex ${
          isHoriz
            ? "flex-row items-center gap-1.5 p-1.5 bg-[#141210]/90 border border-[#2b2722] rounded-xl backdrop-blur-md shadow-xl"
            : "flex-col gap-1.5 w-full"
        }`}
      >
        {navItems.map((item) => (
          <li key={item.to} className="w-full">
            <NavLink
              to={item.to}
              onClick={handleClick}
              className={({ isActive }) =>
                `block w-full px-3.5 py-2 rounded-lg text-xs font-mono font-bold tracking-wider transition-colors duration-200 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141210] ${
                  isActive
                    ? "bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-sm"
                    : "text-[#a1998b] hover:text-[#f4f1ea] hover:bg-[#1c1916] border border-transparent"
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
