import Heading from "../Heading/Heading";
import Timeline from "../Timeline/Timeline";
import jobs from "../Timeline/TimelineJobs";

export default function WorkExperience() {
  return (
    <div className="content">
      <Heading title="Work Experience" />
      <p>
        I have been working in the industry since September 2019, starting as a
        backend developer and growing into full stack engineering.
      </p>
      <Timeline data={jobs} />
    </div>
  );
}
