import image from "../../images/2.jpg";
import "./event.css";
import Header from "../../components/Header";
import { events } from "../../data";
import Event from "../../components/Event";

const Events = () => {
  return (
    <>
      <Header title="Our Events" image={image}>
        Fun and exciting events from our community!
      </Header>
      <section className="events">
        <div className="container events__container">
          {events.map(({ id, image, name, job }) => {
            return <Event key={id} image={image} name={name} job={job} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Events;
