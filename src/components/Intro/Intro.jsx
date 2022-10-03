import React from "react";
import Heading from "../Heading/Heading";
import "./Intro.css";
import TechnologyImage from "./TechnologyImage/TechnologyImage";
import TechnologyImageContainer from "./TechnologyImage/TechnologyImageContainer";

export default function Intro() {
  return (
    <>
      <Heading title="Hi 👋! I'm Casper Hildebrand" animated></Heading>
      <p>
        I am currently a MSc. Computer Science student at the Delft University
        of Technology with a specialization in Data Science. My main interests
        lie in web development, data science and teaching. In my free time, I
        enjoy making music and playing chess. Feel free to{" "}
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
            <TechnologyImage
              src="javascript.svg"
              alt="JavaScript"
              wiki="JavaScript"
            />
            <TechnologyImage
              src="typescript.svg"
              alt="TypeScript"
              wiki="TypeScript"
            />
            <TechnologyImage
              src="react.svg"
              alt="React"
              wiki="React_(JavaScript_library)"
            />
            <TechnologyImage src="vuedotjs.svg" alt="VueJS" wiki="Vue.js" />
            <TechnologyImage
              src="vuetify.svg"
              alt="Vuetify"
              link="https://vuetifyjs.com/en/"
            />
            <TechnologyImage src="html5.svg" alt="HTML" wiki="HTML5" />
            <TechnologyImage src="css3.svg" alt="CSS" wiki="CSS" />
            <TechnologyImage
              src="sass.svg"
              alt="SASS"
              wiki="Sass_(stylesheet_language)"
            />
            <TechnologyImage
              src="tailwindcss.svg"
              alt="Tailwind CSS"
              link="https://tailwindcss.com/"
            />
          </TechnologyImageContainer>
        </>
        <>
          <Heading title="Backend" size="h3" />
          <TechnologyImageContainer>
            <TechnologyImage
              src="python.svg"
              alt="Python"
              wiki="Python_(programming_language)"
            />
            <TechnologyImage
              src="java.svg"
              alt="Java"
              wiki="Java_(programming_language)"
            />
            <TechnologyImage
              src="csharp.svg"
              alt="CSharp"
              wiki="C_Sharp_(programming_language)"
            />
            <TechnologyImage
              src="dotnet.svg"
              alt=".NET"
              wiki=".NET_Framework"
            />
          </TechnologyImageContainer>
        </>
        <>
          <Heading title="Source control" size="h3" />
          <TechnologyImageContainer>
            <TechnologyImage src="git.svg" alt="Git" wiki="Git" />
            <TechnologyImage src="github.svg" alt="GitHub" wiki="GitHub" />
            <TechnologyImage src="gitlab.svg" alt="GitLab" wiki="GitLab" />
          </TechnologyImageContainer>
        </>
        <>
          <Heading title="Content Management Systems" size="h3" />
          <TechnologyImageContainer>
            <TechnologyImage
              src="prismic.svg"
              alt="Prismic CMS"
              link="https://prismic.io/"
            />
            <TechnologyImage
              src="strapi.svg"
              alt="Strapi CMS"
              link="https://strapi.io/"
            />
          </TechnologyImageContainer>
        </>
        <>
          <Heading title="Database Management Systems" size="h3" />
          <TechnologyImageContainer>
            <TechnologyImage src="mysql.svg" alt="MySQL" link="MySQL" />
            <TechnologyImage
              src="postgresql.svg"
              alt="PostgresQL"
              link="PostgresQL"
            />
          </TechnologyImageContainer>
        </>
        <>
          <Heading title="Development tools" size="h3" />
          <TechnologyImageContainer>
            <TechnologyImage
              src="docker.svg"
              alt="Docker"
              wiki="Docker_(software)"
            />
            <TechnologyImage
              src="visualstudiocode.svg"
              alt="Visual Studio Code"
              wiki="Visual_Studio_Code"
            />
            <TechnologyImage
              src="visualstudio.svg"
              alt="Visual Studio"
              wiki="Visual_Studio"
            />
            <TechnologyImage
              src="diagramsdotnet.svg"
              alt="diagrams.net"
              wiki="Diagrams.net"
            />
            <TechnologyImage
              src="postman.svg"
              alt="Postman"
              wiki="Postman_(software)"
            />
          </TechnologyImageContainer>
        </>
      </div>
    </>
  );
}
