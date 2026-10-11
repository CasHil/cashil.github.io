import { ReactNode } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Intro from "../Intro/Intro";
import Education from "../Education/Education";
import WorkExperience from "../WorkExperience/WorkExperience";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Body() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const wrapMotionDiv = (element: ReactNode) => {
    return (
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
        transition={{
          duration: shouldReduceMotion ? 0.05 : 0.25,
          ease: [0.25, 1, 0.5, 1],
        }}
      >
        {element}
      </motion.div>
    );
  };

  return (
    <main id="main-content" tabIndex={-1} className="w-full focus:outline-none">
      <AnimatePresence mode="wait">
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
