import { NavLink } from "react-router-dom";
import SynthOscilloscope from "../Audio/SynthOscilloscope";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="content">
      {/* Studio Header Tag */}
      <div className="flex items-center gap-2 mb-3 text-xs font-mono text-amber-500 uppercase tracking-widest">
        <span>SESSION 01</span>
        <span>//</span>
        <span>OVERVIEW &amp; LINER NOTES</span>
      </div>

      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f4f1ea] mb-6 leading-tight">
        Engineering software systems by day, composing sound by night.
      </h1>

      <div className="space-y-4 text-base sm:text-lg text-[#c7c1b5] leading-relaxed mb-6">
        <p>
          I'm a Full Stack Software Engineer at{" "}
          <a
            href="https://www.tikkie.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 decoration-amber-500/40 hover:decoration-amber-400 transition-colors"
          >
            Tikkie
          </a>
          , where I build <strong>Tikkie Business</strong>. My academic background spans a
          Master's in Computer Science (Data Science) and a Master's in Science Education &amp;
          Communication from{" "}
          <span className="text-[#f4f1ea] font-medium">Delft University of Technology</span>,
          alongside Human-Computer Interaction research at{" "}
          <span className="text-[#f4f1ea] font-medium">KTH Royal Institute of Technology</span>.
        </p>

        <p>
          Both software engineering and musical composition share the same fundamental DNA:
          <strong> structure, rhythm, modularity, and harmonic resonance</strong>. Whether
          orchestrating autonomous agent workflows for the software lifecycle or layering
          synthesizer tracks, I care about craft, clean syntax, and human resonance.
        </p>
      </div>

      {/* Interactive Web Audio Synthesizer & Oscilloscope */}
      <SynthOscilloscope />

      {/* Studio Liner Notes / Action Links */}
      <div className="pt-4 flex flex-wrap items-center gap-3">
        <NavLink
          to="/work-experience"
          className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold bg-amber-500 text-stone-950 hover:bg-amber-400 shadow-lg shadow-amber-500/20 transition-all duration-200"
        >
          EXPLORE TRACKS // EXPERIENCE &rarr;
        </NavLink>
        <NavLink
          to="/education"
          className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold bg-[#1b1916] hover:bg-[#24211d] text-[#e6e2d8] border border-[#38342e] transition-all duration-200"
        >
          FOUNDATIONS // EDUCATION
        </NavLink>
        <a
          href="mailto:casperhildebrand@gmail.com"
          className="px-4 py-2 text-xs sm:text-sm font-mono text-stone-400 hover:text-[#f4f1ea] transition-colors"
        >
          casperhildebrand@gmail.com
        </a>
      </div>
    </div>
  );
}
