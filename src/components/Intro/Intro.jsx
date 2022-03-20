import React from "react";
import Heading from "../Heading/Heading";
import TechonologyImage from "./TechonologyImage/TechonologyImage";
import "./Intro.css";

export default function Intro() {
  return (
    <>
      <Heading title="Hi! I'm Casper Hildebrand" animated></Heading>
      <p>
        I am currently a MSc. Computer Science student at the Delft University
        of Technology with a specialization in Data Science. Next to my studies,
        I am also working as a software developer at Netcompany. My main
        interests lie in web development, data science and teaching. In my free
        time, I am an avid musician and chess player. Feel free to{" "}
        <a className="intro-email" href="mailto:casperhildebrand@gmail.com">
          reach out
        </a>{" "}
        if you would like to chat!
      </p>
      <Heading title="Technologies" size="h2" />
      <p>
        As I mentioned above, I love web development, but through my studies and
        multiple jobs I have gotten to know many technologies and frameworks for
        both backend and frontend development. A small selection of these
        technologies can be found below.
      </p>
      <div className="flex flex-row flex-wrap gap-3 mt-5 pb-8">
        <TechonologyImage src="javascript.svg" alt="JavaScript" />
        <TechonologyImage src="typescript.svg" alt="TypeScript" />
        <TechonologyImage src="react.svg" alt="React" />
        <TechonologyImage src="vuedotjs.svg" alt="VueJS" />
        <TechonologyImage src="vuetify.svg" alt="Vuetify" />
        <TechonologyImage src="html5.svg" alt="HTML" />
        <TechonologyImage src="css3.svg" alt="CSS" />
        <TechonologyImage src="sass.svg" alt="SASS" />
        <TechonologyImage src="tailwindcss.svg" alt="Tailwind CSS" />
        <TechonologyImage src="python.svg" alt="Python" />
        <TechonologyImage src="java.svg" alt="Java" />
        <TechonologyImage src="csharp.svg" alt="CSharp" />
        <TechonologyImage src="dotnet.svg" alt=".NET" />
        <TechonologyImage src="postman.svg" alt="Postman" />
        <TechonologyImage src="prismic.svg" alt="Prismic CMS" />
        <TechonologyImage src="strapi.svg" alt="Strapi CMS" />
        <TechonologyImage src="git.svg" alt="Git" />
        <TechonologyImage src="github.svg" alt="GitHub" />
        <TechonologyImage src="gitlab.svg" alt="GitLab" />
      </div>
    </>
  );
}
