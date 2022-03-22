import React from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "../Intro/Intro";
import Education from "../Education/Education";
import WorkExperience from "../WorkExperience/WorkExperience";
import FooterImage from "../Footer/FooterImage/FooterImage";
import TechonologyImage from "../Intro/TechonologyImage/TechonologyImage";
export default function Body() {
  return (
    <div className="m-auto my-12 pb-5 w-3/4 md:w-1/2 content">
      <img
        className="m-auto h-48 w-48 rounded-full mb-5"
        src={process.env.PUBLIC_URL + "/images/profile.jpg"}
        alt="Profile"
      ></img>
      <nav className="flex justify-center gap-3 mb-12">
        <TechonologyImage
          src="linkedin.svg"
          alt="LinkedIn"
          link="https://www.linkedin.com/in/casper-hildebrand/"
        ></TechonologyImage>
        <TechonologyImage
          src="github.svg"
          alt="GitHub"
          link="https://github.com/CasHil"
        ></TechonologyImage>
      </nav>
      <Routes>
        <Route exact path="/" element={<Intro />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/work-experience" element={<WorkExperience />}></Route>
      </Routes>
    </div>
  );
}
