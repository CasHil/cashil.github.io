import React from "react";
import TechnologyImage from "../TechnologyImage/TechnologyImage";
import Heading from "../../Heading/Heading";
export default function IntroLinks() {
  return (
    <>
      <img
        className="m-auto h-48 w-48 rounded-full mb-5"
        src={process.env.PUBLIC_URL + "/images/profile.jpg"}
        alt="Profile"
      ></img>
      <Heading title="Casper Hildebrand" size="h2" alignment="center"></Heading>
      <nav className="flex justify-center gap-3 mb-12">
        <TechnologyImage
          src="linkedin.svg"
          alt="LinkedIn"
          link="https://www.linkedin.com/in/casper-hildebrand/"
        ></TechnologyImage>
        <TechnologyImage
          src="github.svg"
          alt="GitHub"
          link="https://github.com/CasHil"
        ></TechnologyImage>
      </nav>
    </>
  );
}
