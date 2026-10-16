import "./Intro.css";
import SynthConsole from "../Console/SynthConsole";
import HighlightsBento from "./HighlightsBento";

export default function Intro() {
  return (
    <div className="content">
      {/* Eyebrow Badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] font-medium bg-[#eaeaea]/80 dark:bg-[#1a1815] text-[#5a5a57] dark:text-[#a1998b] border border-[#dedede] dark:border-[#2b2722]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          SOFTWARE ENGINEER & MUSICIAN
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#f4f1ea] mb-5 leading-tight">
        Engineering high-scale systems and algorithmic audio at the edge of craft.
      </h1>

      <div className="space-y-4 text-base sm:text-lg text-[#5a5a57] dark:text-[#b5af9f] leading-relaxed">
        <p>
          I am a Full Stack Software Engineer at{" "}
          <a
            href="https://www.tikkie.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] dark:text-[#ffffff] font-medium underline underline-offset-4 decoration-[#dedede] dark:decoration-[#332f29] hover:decoration-[#111111] dark:hover:decoration-[#ffffff] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm"
          >
            Tikkie
          </a>{" "}
          (ABN AMRO), architecting core payment workflows and tooling for <strong>Tikkie Business</strong>. 
          I hold dual Master's degrees from{" "}
          <span className="text-[#111111] dark:text-[#f4f1ea] font-medium">Delft University of Technology</span> in Computer Science (Data Science) and Science Education, with research in gradual programming language compilers under Prof. Felienne Hermans, plus Human-Computer Interaction at{" "}
          <span className="text-[#111111] dark:text-[#f4f1ea] font-medium">KTH Royal Institute of Technology</span> in Stockholm.
        </p>
      </div>

      {/* Centerpiece Interactive Hardware Instrument & DSP Console */}
      <SynthConsole />

      {/* Verified Production & Research Pillars Bento */}
      <HighlightsBento />
    </div>
  );
}
