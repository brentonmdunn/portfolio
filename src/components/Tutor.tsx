import { Experience } from "./Experience";
import "./Experience.css";

export const Tutor = () => {
  return (
    <div className="experience">
      <Experience
        title="Instructional Assistant"
        organization="UCSD Computer Science & Engineering Department"
        dates="March 2023 - Present"
      />
      <ul className="experience-bullets">
        <li>
          Hold multiple weekly office hours and one-on-one meeting for guidance
          and supplemental instruction.
        </li>
        <li>Answer tickets on online discussion forum.</li>
      </ul>
    </div>
  );
};
