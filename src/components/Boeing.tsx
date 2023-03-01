import { Experience } from "./Experience";
import "./Experience.css";

export const Boeing = () => {
  return (
    <div className="experience">
      <Experience
        organization="Boeing"
        title="Intern"
        dates="June 2021 - August 2021"
        location="El Segundo, California"
      />
      <ul className="experience-bullets">
        <li>
          Collaborated with another intern to develop a prototype website using
          React.js that takes user-inputted data from a form.
        </li>
        <li>
          Implemented a simulated REST service to deliver data in JSON format
          for rapid prototyping.
        </li>
      </ul>
    </div>
  );
};
