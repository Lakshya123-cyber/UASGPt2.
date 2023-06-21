import { Link } from "react-router-dom";
import Card from "../UI/Card";

const Event = ({ image, name, job }) => {
  return (
    <Card className="event">
      <div className="event__img">
        <img src={image} alt={name} />
      </div>
      <h3 style={{ color: "yellow" }}>{name}</h3>
      <p>{job}</p>
      <br />
      <Link to="/event_details" className="btn lg">
        Learn More
      </Link>
      <br />
      <br />
    </Card>
  );
};

export default Event;
