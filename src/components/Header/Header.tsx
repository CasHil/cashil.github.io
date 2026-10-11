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
    { to: "/", label: "Home" },
    { to: "/work-experience", label: "Experience" },
    { to: "/education", label: "Education" },
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
            ? "flex-row items-center gap-1 p-1 bg-[#ffffff] dark:bg-[#141210] border border-[#eaeaea] dark:border-[#24211d] rounded-lg"
            : "flex-col gap-1 w-full"
        }`}
      >
        {navItems.map((item) => (
          <li key={item.to} className="w-full">
            <NavLink
              to={item.to}
              onClick={handleClick}
              className={({ isActive }) =>
                `block w-full px-3 py-2 rounded-md text-sm transition-colors duration-150 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 ${
                  isActive
                    ? "font-semibold text-[#111111] dark:text-[#ffffff] bg-[#eaeaea]/60 dark:bg-[#1a1815]"
                    : "text-[#5a5a57] dark:text-[#8a8376] hover:text-[#111111] dark:hover:text-[#f4f1ea] hover:bg-[#eaeaea]/40 dark:hover:bg-[#1a1815]/60"
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
