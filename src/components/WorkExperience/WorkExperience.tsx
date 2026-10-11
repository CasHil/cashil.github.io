import Timeline from "../Timeline/Timeline";
import jobs from "../Timeline/TimelineJobs";

export default function WorkExperience() {
  return (
    <div className="content">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111] dark:text-[#f4f1ea] mb-3 leading-tight">
          Work Experience
        </h1>

        <p className="text-[#5a5a57] dark:text-[#b5af9f] text-base sm:text-lg leading-relaxed mb-6">
          Software engineering roles, consulting projects, and teaching positions since 2019.
        </p>
      </div>

      <Timeline data={jobs} />
    </div>
  );
}
