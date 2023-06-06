import image from "../../images/2.png";
import Header from "../../components/Header";
import { BsInstagram } from "react-icons/bs";
import { trainers } from "../../data";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Trainer from "../../components/Trainer";
import "./member.css";

const Member = () => {
  return (
    <>
      <Header title="Core Members" image={image}>
        With a shared passion and commitment, we work collaboratively to achieve
        our goals and make a positive impact. Each member brings unique skills,
        perspectives, and experiences, contributing to the strength and
        effectiveness of our team.
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Member;
