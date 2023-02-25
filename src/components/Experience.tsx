import "./Experience.css";

interface ExperienceProp {
  title: string;
  organization: string;
  dates: string;
}

export const Experience = ({ organization, title, dates }: ExperienceProp) => {
  return (
    <div>
      <h4 className="organization">{organization}</h4>
      <div className="title-date">
        <p className="alignleft">{title}</p>
        <p className="alignright">{dates}</p>
        <div className="clear"></div>
      </div>
    </div>
  );
};
