import Image from "../../images/2.png";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import Header from "../../components/Header";
import "./contact.css";
import { useEffect } from "react";
import ContactSection from "../../components/ContactSection";
import Map from "../../components/Map";

const Contact = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header title="Get in Touch" image={Image}></Header>
      <ContactSection />
      <Map />
    </>
  );
};

export default Contact;
