import { Boeing } from "./components/Boeing";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { TSE } from "./components/TSE";
import { Tutor } from "./components/Tutor";

import "./App.css";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="center">
        <h1>Brenton Dunn</h1>
        <Education />
      </div>
      <h2 className="center">Education</h2>
      <h3>Relevant Coursework</h3>
      <ul>
        <li>Intro to Programming</li>
        <li>Discrete Mathemathics</li>
        <li>Data Structures & Object Oriented Design</li>
        <li>Mathematics for Algorithms</li>
      </ul>
      <h2 className="center">Experience</h2>
      <TSE />
      <Tutor />
      <Boeing />
      <h2 className="center">Skills</h2>
      <Skills />
    </div>
  );
};
