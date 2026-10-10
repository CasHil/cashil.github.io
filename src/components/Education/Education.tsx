import Timeline from "../Timeline/Timeline";
import education from "../Timeline/TimelineEducation";

export default function Education() {
  return (
    <div className="content">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
          <span>THEORY &amp; HARMONICS</span>
          <span>//</span>
          <span>ACADEMIC FOUNDATIONS</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f4f1ea] mb-4">
          Education
        </h1>

        <p className="text-[#c7c1b5] text-base sm:text-lg leading-relaxed mb-4">
          Rigorous foundational studies in Computer Science, Data Science, Human-Computer
          Interaction, and Science Education at Delft University of Technology and KTH Royal
          Institute of Technology in Stockholm.
        </p>

        {/* Console Education Metadata Bar */}
        <div className="flex flex-wrap items-center gap-2.5 p-3 rounded-xl bg-[#141210] border border-[#2b2722] text-xs font-mono text-[#a1998b]">
          <span className="text-amber-400 font-bold">DOUBLE MASTER OF SCIENCE</span>
          <span className="text-stone-600">•</span>
          <span>TU DELFT &amp; KTH</span>
          <span className="text-stone-600">•</span>
          <span>DATA SCIENCE, UX &amp; EDUCATION</span>
        </div>
      </div>

      <Timeline data={education} />
    </div>
  );
}
