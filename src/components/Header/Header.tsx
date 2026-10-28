import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

interface HeaderProps {
  handleClick?: () => void;
  orientation?: "vertical" | "horizontal";
}

export default function Header({
  handleClick,
  orientation = "horizontal",
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
              : "flex flex-wrap items-center gap-1 sm:gap-2 -ml-2"
          }
        >
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={handleClick}
                className={({ isActive }) =>
                  `relative px-2.5 py-1 text-sm font-medium transition-colors duration-150 inline-block ${
                    isActive
                      ? "text-zinc-950 dark:text-white font-semibold"
                      : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-zinc-900 dark:bg-emerald-400"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
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
