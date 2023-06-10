import { useEffect } from "react";
import FAQs from "../../components/FAQs";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Testimonials from "../../components/Testimonials";
import Values from "../../components/Values";
import "./home.css";

import layerBaseImage from "../../images/layer-base.png";
import layerMiddleImage from "../../images/layer-middle.png";
import layerFrontImage from "../../images/layer-front.png";
import dungeonImage from "../../images/dungeon.jpg";

const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <header className="header-main">
            <div className="layers">
              <div className="layer-head">
                <div className="caption">
                  <MainHeader />
                </div>
              </div>
              <div
                className="img-layer layer-base"
                style={{ backgroundImage: `url(${layerBaseImage})` }}
              ></div>
              <div
                className="img-layer layer-mid"
                style={{ backgroundImage: `url(${layerMiddleImage})` }}
              ></div>
              <div
                className="img-layer layer-front"
                style={{ backgroundImage: `url(${layerFrontImage})` }}
              ></div>
            </div>
          </header>
        </div>
      </div>
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  );
};

export default Home;
