interface ExperienceProp {
  title: string;
  organization: string;
}

export const Experience = ({ organization, title }: ExperienceProp) => {
  return (
    <div>
      <p>{organization}</p>
      <p>{title}</p>
    </div>
  );
};
