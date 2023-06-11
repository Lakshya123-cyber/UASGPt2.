import "./card.css";
import Img from "../../images/moutain.jpeg";

const FFCard = ({ className, children }) => {
  return (
    <div className={`cardd ${className}`}>
      <div className="card-front">
        <img src={Img} alt="" />
      </div>
      <div className="card-back">{children}</div>
    </div>
  );
};

export default FFCard;
