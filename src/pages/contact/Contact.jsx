import Image from "../../images/2.png";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import Header from "../../components/Header";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get in Touch" image={Image}></Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:uttarakhandasg@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="http://www.instagram.com/Uasgvibes"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsInstagram />
            </a>
            <a
              href="http://wa.me/+6590660771"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
