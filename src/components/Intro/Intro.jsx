import React from "react";
import Heading from "../Heading/Heading";
import TechonologyImage from "./TechonologyImage/TechonologyImage";
import "./Intro.css";
import TechnologyImageContainer from "./TechonologyImage/TechnologyImageContainer";

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
      <div className="mt-5 pb-8">
        <>
          <Heading title="Frontend" size="h3" />
          <TechnologyImageContainer>
            <TechonologyImage
              src="javascript.svg"
              alt="JavaScript"
              wiki="JavaScript"
            />
            <TechonologyImage
              src="typescript.svg"
              alt="TypeScript"
              wiki="TypeScript"
            />
            <TechonologyImage
              src="react.svg"
              alt="React"
              wiki="React_(JavaScript_library)"
            />
            <TechonologyImage src="vuedotjs.svg" alt="VueJS" wiki="Vue.js" />
            <TechonologyImage
              src="vuetify.svg"
              alt="Vuetify"
              link="https://vuetifyjs.com/en/"
            />
            <TechonologyImage src="html5.svg" alt="HTML" wiki="HTML5" />
            <TechonologyImage src="css3.svg" alt="CSS" wiki="CSS" />
            <TechonologyImage
              src="sass.svg"
              alt="SASS"
              wiki="Sass_(stylesheet_language)"
            />
            <TechonologyImage
              src="tailwindcss.svg"
              alt="Tailwind CSS"
              link="https://tailwindcss.com/"
            />
          </TechnologyImageContainer>
        </>
        <>
          <Heading title="Backend" size="h3" />
          <TechnologyImageContainer>
            <TechonologyImage
              src="python.svg"
              alt="Python"
              wiki="Python_(programming_language)"
            />
            <TechonologyImage
              src="java.svg"
              alt="Java"
              wiki="Java_(programming_language)"
            />
            <TechonologyImage
              src="csharp.svg"
              alt="CSharp"
              wiki="C_Sharp_(programming_language)"
            />
            <TechonologyImage
              src="dotnet.svg"
              alt=".NET"
              wiki=".NET_Framework"
            />
            <TechonologyImage
              src="postman.svg"
              alt="Postman"
              wiki="Postman_(software)"
            />
          </TechnologyImageContainer>
        </>
        <>
          <Heading title="Source control" size="h3" />
          <TechnologyImageContainer>
            <TechonologyImage src="git.svg" alt="Git" wiki="Git" />
            <TechonologyImage src="github.svg" alt="GitHub" wiki="GitHub" />
            <TechonologyImage src="gitlab.svg" alt="GitLab" wiki="GitLab" />
          </TechnologyImageContainer>
        </>
        <>
          <Heading title="Content Management Systems" size="h3" />
          <TechnologyImageContainer>
            <TechonologyImage
              src="prismic.svg"
              alt="Prismic CMS"
              link="https://prismic.io/"
            />
            <TechonologyImage
              src="strapi.svg"
              alt="Strapi CMS"
              link="https://strapi.io/"
            />
          </TechnologyImageContainer>
        </>
      </div>
    </>
  );
}
