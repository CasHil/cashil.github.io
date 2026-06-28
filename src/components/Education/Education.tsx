import Heading from "../Heading/Heading";
import Timeline from "../Timeline/Timeline";
import education from "../Timeline/TimelineEducation";

export default function Education() {
  return (
    <div className="content">
      <Heading title="Education" />
      <Timeline data={education} />
    </div>
  );
}
