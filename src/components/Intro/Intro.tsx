import Heading from "../Heading/Heading";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="content">
      <Heading title="Hi 👋! I'm Casper" animated></Heading>
      <p>
        I'm a Full Stack Software Engineer at{" "}
        <span>
          <a href="https://www.tikkie.me/">Tikkie</a>
        </span>
        , where I'm currently building Tikkie Business. I hold a Master's in
        Computer Science (Data Science) and a Master's in Science Education &
        Communication, both from Delft University of Technology.
      </p>
      <p>
        I'm interested in agentic engineering and working towards an AI-enabled
        software development lifecycle. When I'm not coding, I love making music
        and playing chess.
      </p>
      <p>
        Feel free to{" "}
        <span>
          <a className="intro-email" href="mailto:casperhildebrand@gmail.com">
            reach out
          </a>
        </span>
        !
      </p>
    </div>
  );
}
