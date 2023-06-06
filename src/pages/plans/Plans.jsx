import "./plans.css";
import image from "../../images/2.png";
import { plans } from "../../data";
import Header from "../../components/Header";
import Card from "../../UI/Card";
import { useEffect } from "react";

const Plans = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header title="Membership Plans" image={image}>
        Join UASG to network with Uttarakhandis in Singapore, fulfill social
        responsibilities, participate in events, support charitable programs in
        Uttarakhand, and be part of a motivated team.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">
                  <a href="https://forms.gle/2oz3YR9taPCvrgb2A">Choose Plan</a>
                </button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
