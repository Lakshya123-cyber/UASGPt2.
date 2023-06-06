import Card from "../UI/Card";

const Event = ({ image, name, job }) => {
  return (
    <Card className="event">
      <div className="event__img">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
    </Card>
  );
};

export default Event;
