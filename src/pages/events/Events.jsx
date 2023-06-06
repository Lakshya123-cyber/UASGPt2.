import image from "../../images/2.jpg";
import "./event.css";
import Header from "../../components/Header";

const Events = () => {
  return (
    <>
      <Header title="Our Events" image={image}>
        Fun and exciting events from our community!
      </Header>
    </>
  );
};

export default Events;
