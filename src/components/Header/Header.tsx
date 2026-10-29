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
    { to: "/cv", label: t.nav.cv },
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
              : "flex flex-wrap items-center gap-1 sm:gap-2"
          }
        >
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={handleClick}
                className={({ isActive }) =>
                  `relative px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-150 inline-block rounded-md ${
                    isActive
                      ? "text-zinc-950 dark:text-white font-semibold"
                      : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-emerald-600 dark:bg-emerald-400"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
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
