import { ReactNode } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Intro from "../Intro/Intro";
import Education from "../Education/Education";
import WorkExperience from "../WorkExperience/WorkExperience";
import { AnimatePresence, motion } from "framer-motion";

export default function Body() {
  const location = useLocation();

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const wrapMotionDiv = (element: ReactNode) => {
    const states = {
      hidden: { opacity: 0, y: 100 },
      show: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -100 },
    };
    return (
      <motion.div
        initial={states.hidden}
        animate={states.show}
        exit={states.exit}
        transition={{ duration: 0.4 }}
        onAnimationStart={goToTop}
      >
        {element}
      </motion.div>
    );
  };

  return (
    <main className="m-auto pb-5 w-5/6 lg:w-3/4 flex justify-center flex-col md:block">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={wrapMotionDiv(<Intro />)} />
          <Route path="/education" element={wrapMotionDiv(<Education />)} />
          <Route
            path="/work-experience"
            element={wrapMotionDiv(<WorkExperience />)}
          />
        </Routes>
      </AnimatePresence>
    </main>
  );
}
