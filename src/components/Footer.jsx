import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
          </Link>
          <p>
            Uttarakhand Association of Singapore (UASG) is a non-profit,
            voluntary organization. Its mission is to nurture a strong network
            of people living in Singapore, around the rich and diverse heritage
            of the state of Uttarakhand, India.
          </p>
          <div className="footer__socials">
            <a
              href="https://www.instagram.com/Uasgvibes"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.twitter.com/UttarakhandSG"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">MemberShip</Link>
          <Link to="/events">Events</Link>
          <Link to="/members">Members</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/members">Members</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact</Link>
        </article>
      </div>

      <div className="footer__copyright">
        <small>
          2023 Uttarakhand Association of Singapore &copy; All Rights Reserved.
          Designed and Developed by{" "}
          <a href="https://raikwal-homepage.vercel.app">LAKSHYA RAIKWAL</a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
