import image from "../../images/2.jpg";
import "./event.css";
import Header from "../../components/Header";
import { events } from "../../data";
import Event from "../../components/Event";
import { useEffect } from "react";

const Events = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
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
