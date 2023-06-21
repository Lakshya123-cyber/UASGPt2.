import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: #a32012;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: #000;
    background-color: #fff;
    padding: 1rem 1rem 0.5rem 1rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    font-size: 1.7rem;
  }
  font-weight: bold;
  font-size: 1.4rem;

  @media screen and (max-width: 768px) {
    gap: 0.5rem;
    padding: 1rem;
    font-size: 1rem;
  }
`;

const ContactInfoItem = ({ icon = <MdPlace />, text = "this is an info" }) => {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <p>{text}</p>
      </div>
    </ItemStyles>
  );
};

export default ContactInfoItem;
