
import Image from "../images/logo.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h3 style={{ color: "#fff" }}>#KauthigSG2023</h3>
          <h1 style={{ color: "#fff" }}>
            Uttarakhand Association of Singapore
          </h1>
          <p style={{ color: "#fff" }}>
            Uttarakhand Association of Singapore (UASG) is a non-profit
            voluntary organization established in Singapore. UASG's mission is
            to nurture a strong network of Indian diaspora around the rich and
            diverse heritage of Uttarakhand, India. The mission also includes to
            develop and implement meaningful programs in Uttarakhand state of
            India.
          </p>
        </div>
        <div className="main__header-right">
          <div className="main__header-image">
            <img src={Image} alt="logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
