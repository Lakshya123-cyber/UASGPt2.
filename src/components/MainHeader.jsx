import { Link } from "react-router-dom";
import Image from "../images/logo.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#KauthigSG2023</h4>
          <h1>Uttarakhand Association of Singapore</h1>
          <p>
            Uttarakhand Association of Singapore (UASG) is a non-profit
            voluntary organization established in Singapore. UASG's mission is
            to nurture a strong network of Indian diaspora around the rich and
            diverse heritage of Uttarakhand, India. The mission also includes to
            develop and implement meaningful programs in Uttarakhand state of
            India.
          </p>
          <Link to="/events" className="btn lg">
            More about Kauthig 2023
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
