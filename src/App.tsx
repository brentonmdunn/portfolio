import { Boeing } from "./components/Boeing";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { TSE } from "./components/TSE";
import { Tutor } from "./components/Tutor";

import "./App.css";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <div className="body">
      <Navbar />
      <div className="center">
        <h1>Brenton Dunn</h1>
        <Education />
      </div>
      <div className="section edu">
        <h2 className="center">Education</h2>
        <p className="padding">UC San Diego | Computer Science | June 2026</p>
        <h3 className="padding">Relevant Coursework</h3>
        <ul className="padding">
          <li>Intro to Programming</li>
          <li>Discrete Mathemathics</li>
          <li>Data Structures & Object Oriented Design</li>
          <li>Mathematics for Algorithms</li>
        </ul>
      </div>

      <div className="experience-section section padding">
        <h2 className="center">Experience</h2>
        <TSE />
        <Tutor />
        <Boeing />
      </div>

      <div className="skills section padding">
        <h2 className="center">Skills</h2>
        <Skills />
      </div>
    </div>
  );
};
