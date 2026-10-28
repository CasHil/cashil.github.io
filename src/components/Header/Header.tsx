import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

interface HeaderProps {
  handleClick?: () => void;
  orientation?: "vertical" | "horizontal";
}

export default function Header({
  handleClick,
  orientation = "vertical",
}: HeaderProps) {
  const { t } = useLanguage();

  const navItems = [
    { to: "/", label: t.nav.overview },
    { to: "/work-experience", label: t.nav.workExperience },
    { to: "/education", label: t.nav.education },
    { to: "/about", label: t.nav.about },
  ];

  const isVertical = orientation === "vertical";

  return (
    <header aria-label="Main Navigation">
      <nav aria-label="Site Links">
        <ul
          role="list"
          className={
            isVertical
              ? "flex flex-col space-y-1"
              : "flex flex-wrap items-center gap-1.5"
          }
        >
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={handleClick}
                className={({ isActive }) =>
                  `group relative flex items-center px-3.5 py-1.5 rounded-[2px] text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white font-semibold border border-zinc-200/80 dark:border-white/10"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/60 dark:hover:bg-white/5 border border-transparent"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`h-1.5 w-1.5 rounded-full mr-2.5 transition-all duration-150 ${
                        isActive
                          ? "bg-emerald-600 dark:bg-emerald-400 scale-100 opacity-100"
                          : "bg-transparent scale-0 opacity-0 group-hover:scale-75 group-hover:opacity-60 group-hover:bg-zinc-400 dark:group-hover:bg-zinc-500"
                      }`}
                    />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
