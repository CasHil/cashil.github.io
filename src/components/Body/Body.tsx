import { ReactNode } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Intro from "../Intro/Intro";
import Education from "../Education/Education";
import WorkExperience from "../WorkExperience/WorkExperience";
import { AnimatePresence, motion } from "framer-motion";

export default function Body() {
  const location = useLocation();

  const wrapMotionDiv = (element: ReactNode) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
      >
        {element}
      </motion.div>
    );
  };

  return (
    <main className="w-full">
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
