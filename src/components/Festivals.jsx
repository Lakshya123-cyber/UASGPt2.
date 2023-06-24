import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { festivals } from "../data";
import { Link } from "react-router-dom";

import Card from "../UI/Card";

const Festivals = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="Events" />
        <div className="programs__wrapper">
          {festivals.map(({ id, image, title, info }) => {
            return (
              <Card className="programs__program" key={id}>
                <img src={image} alt="img" />
                <h4 style={{ marginTop: "10px" }}>{title}</h4>
                <p>{info}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Festivals;
