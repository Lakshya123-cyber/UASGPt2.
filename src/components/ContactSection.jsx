import React from "react";
import styled from "styled-components";
import ContactInfoItem from "./ContactInfoItem";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "./ContactForm";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;

  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }

  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: #000;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }

  .left {
    width: 100%;
    max-width: 500px;
  }

  .right {
    max-width: 500px;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
      top: -150px;
      gap: 0.7rem;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

const ContactSection = () => {
  return (
    <ContactSectionStyle>
      <div className="container">
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+65 90660771" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="uttarakhandasg@gmail.com"
            />
            <ContactInfoItem text="UBI AVENUE 3, Singapore 408868" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
};

export default ContactSection;
