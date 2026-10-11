import Timeline from "../Timeline/Timeline";
import education from "../Timeline/TimelineEducation";

export default function Education() {
  return (
    <div className="content">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111] dark:text-[#f4f1ea] mb-3 leading-tight">
          Education
        </h1>

        <p className="text-[#5a5a57] dark:text-[#b5af9f] text-base sm:text-lg leading-relaxed mb-6">
          Degrees and coursework in Computer Science, Data Science, Human-Computer Interaction,
          and Science Education from Delft University of Technology and KTH Royal Institute of Technology.
        </p>
      </div>

      <Timeline data={education} />
    </div>
  );
}
