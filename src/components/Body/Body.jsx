import React from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "../Intro/Intro";
import Education from "../Education/Education";
import WorkExperience from "../WorkExperience/WorkExperience";
export default function Body() {
  return (
    <div className="m-auto my-12 w-1/2">
      <img
        className="m-auto h-48 w-48 rounded-full mb-12"
        src={process.env.PUBLIC_URL + "images/profile.jpg"}
        alt="Profile"
      ></img>
      <Routes>
        <Route exact path="/" element={<Intro />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/work-experience" element={<WorkExperience />}></Route>
      </Routes>
    </div>
  );
}
