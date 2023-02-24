import { Boeing } from "./components/Boeing";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { TSE } from "./components/TSE";
import { Tutor } from "./components/Tutor";

import "./App.css";

export const App = () => {
  return (
    <div>
      <h1>Brenton Dunn</h1>
      <Education />
      <h3>Relevant Coursework</h3>
      <ul>
        <li>Intro to Programming</li>
        <li>Discrete Mathemathics</li>
        <li>Data Structures & Object Oriented Design</li>
        <li>Mathematics for Algorithms</li>
      </ul>
      <h3>Experience</h3>
      <TSE />
      <Tutor />
      <Boeing />
      <h3>Skills</h3>
      <Skills />
    </div>
  );
};
