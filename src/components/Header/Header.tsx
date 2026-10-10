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
    <header className="w-full">
      <nav
        className={`flex ${
          isHoriz
            ? "flex-row items-center gap-1.5 p-1.5 bg-[#141210]/90 border border-[#2b2722] rounded-xl backdrop-blur-md shadow-xl"
            : "flex-col gap-1.5 w-full mt-4"
        }`}
        aria-label="Studio Navigation"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={handleClick}
            className={({ isActive }) =>
              `relative px-3.5 py-2 rounded-lg text-xs font-mono font-bold tracking-wider transition-all duration-200 text-left ${
                isActive
                  ? "bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-sm"
                  : "text-[#a1998b] hover:text-[#f4f1ea] hover:bg-[#1c1916] border border-transparent"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
