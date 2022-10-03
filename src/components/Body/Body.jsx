import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Intro from "../Intro/Intro";
import Education from "../Education/Education";
import WorkExperience from "../WorkExperience/WorkExperience";
import { AnimatePresence, motion } from "framer-motion";

export default function Body() {
  const location = useLocation();

  function wrapMotionDiv(element) {
    const states = {
      hidden: {
        opacity: 0,
        x: 100,
      },
      show: {
        opacity: 1,
        x: 0,
      },
      exit: {
        opacity: 0,
        x: -100,
      },
    };
    return (
      <motion.div
        initial={states.hidden}
        animate={states.show}
        exit={states.exit}
        transition={{ duration: 0.3 }}
      >
        {element}
      </motion.div>
    );
  }
  return (
    <main className="m-auto pb-5 w-5/6 lg:w-2/3 content flex justify-center flex-col md:block">
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={wrapMotionDiv(<Intro />)}></Route>
          <Route
            path="/education"
            element={wrapMotionDiv(<Education />)}
          ></Route>
          <Route
            path="/work-experience"
            element={wrapMotionDiv(<WorkExperience />)}
          ></Route>
        </Routes>
      </AnimatePresence>
    </main>
  );
}
