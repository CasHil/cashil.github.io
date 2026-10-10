import Timeline from "../Timeline/Timeline";
import jobs from "../Timeline/TimelineJobs";

export default function WorkExperience() {
  return (
    <div className="content">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2 text-xs font-mono text-amber-500 uppercase tracking-widest">
          <span>TRACKLIST</span>
          <span>//</span>
          <span>SESSION LOG</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f4f1ea] mb-4">
          Work Experience
        </h1>

        <p className="text-[#c7c1b5] text-base sm:text-lg leading-relaxed mb-4">
          A chronology of production systems, engineering consulting, educational
          ventures, and software craft across commercial and academic domains since 2019.
        </p>

        {/* Console Track Metadata Bar */}
        <div className="flex flex-wrap items-center gap-2.5 p-3 rounded-xl bg-[#141210] border border-[#2b2722] text-xs font-mono text-[#a1998b]">
          <span className="text-amber-400 font-bold">13 SESSIONS</span>
          <span className="text-stone-600">•</span>
          <span>FULL STACK &amp; BACKEND</span>
          <span className="text-stone-600">•</span>
          <span>CURRENT: TIKKIE BUSINESS</span>
        </div>
      </div>

      <Timeline data={jobs} />
    </div>
  );
}
