import "./Experience.css";

interface ExperienceProp {
  title: string;
  organization: string;
  dates: string;
  location: string;
}

export const Experience = ({
  organization,
  title,
  dates,
  location,
}: ExperienceProp) => {
  return (
    <div>
      {/* <div className="title-date top-bar">
        <p className="alignleft organization">{organization}</p>
        <p className="alignright">{location}</p>
        <div className="clear"></div>
      </div>
      <div className="title-date">
        <p className="alignleft">{title}</p>
        <p className="alignright">{dates}</p>
        <div className="clear"></div>
      </div> */}

      <div className="flex-container">
        <div className="left bold">{organization}</div>
        <div className="left">{title}</div>
        <div className="right">{dates}</div>
        <div className="right">{location}</div>
        {/* <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div> */}
      </div>
    </div>
  );
};
