import React from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "../Intro/Intro";
import Education from "../Education/Education";
import WorkExperience from "../WorkExperience/WorkExperience";

export default function Body() {
  return (
    <main className="m-auto pb-5 w-5/6 lg:w-2/3 content flex justify-center flex-col md:block">
      <Routes>
        <Route exact path="/" element={<Intro />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/work-experience" element={<WorkExperience />}></Route>
      </Routes>
    </main>
  );
}
