import { Boeing } from "./components/Boeing";
import { Education as Contact } from "./components/Contact";
import { Skills } from "./components/Skills";
import { TSE } from "./components/TSE";
import { Tutor } from "./components/Tutor";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { Education } from "./components/Education";

export const App = () => {
  return (
    <div className="body">
      <Navbar />
      <div className="center">
        <h1>Brenton Dunn</h1>
        <Contact />
      </div>
      <div className="section edu padding">
        <h2 className="center">Education</h2>
        {/* <p className="bold">University of California San Diego</p>
        <p>Major: Computer Science</p> */}
        <Education />
        <p className="bold">Relevant Coursework:</p>
        <ul>
          <li>Intro to Programming</li>
          <li>Discrete Mathematics</li>
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
