import Card from "../UI/Card";

const Trainer = ({ image, name, job, socials }) => {
  return (
    <Card className="trainer">
      <div className="trainer__img">
        <img src={image} alt={name} />
      </div>
      <h3 style={{ color: "white" }}>{name}</h3>
      <p style={{ color: "yellow" }}>{job}</p>
      <div className="trainer__socials">
        {socials.map(({ icon, link }, index) => {
          return (
            <a
              href={link}
              key={index}
              target="_blank"
              rel="noreferrer noopener"
            >
              {icon}
            </a>
          );
        })}
      </div>
    </Card>
  );
};

export default Trainer;
