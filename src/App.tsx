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
      <h2>Relevant Coursework</h2>
      <ul>
        <li>Intro to Programming</li>
        <li>Discrete Mathemathics</li>
        <li>Data Structures & Object Oriented Design</li>
        <li>Mathematics for Algorithms</li>
      </ul>
      <h2>Experience</h2>
      <TSE />
      <Tutor />
      <Boeing />
      <h2>Skills</h2>
      <Skills />
    </div>
  );
};
