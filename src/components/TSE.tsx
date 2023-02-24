import { Experience } from "./Experience";

export const TSE = () => {
  return (
    <div>
      <Experience
        title="Software Developer"
        organization="Triton Software Engineering"
      />

      <ul>
        <li>
          Developing a data visualization website pro-bono for the San Diego
          County Tax Association (501(c)(4)).
        </li>
        <li>
          Focusing on URL routing using React Router and creating interactive
          blog-style web pages that incorporates Tableau integration.
        </li>
        <li>
          Implementing front-end UI/UX design based on Figma design boards using
          Redux design patterns for state management.
        </li>
        <li>
          Meeting for weekly standups with other developers, UI/UX designers,
          and engineering manager in order to perform code reviews and discuss
          iterative improvements.
        </li>
      </ul>
    </div>
  );
};
