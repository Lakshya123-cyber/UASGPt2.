import "./about.css";
import Header from "../../components/Header";
import image from "../../images/2.png";
import Image from "../../images/logo.png";

const About = () => {
  return (
    <>
      <Header title="About Us" image={image}>
        Uttarakhand Association of Singapore (UASG) is a non-profit organization
        registered in the nineties under the Laws of Singapore. The objective of
        UASG is to nurture a strong network of Indian diaspora around the rich
        and diverse heritage of Uttarakhand state of India.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={Image} alt="logo" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p className="p">
              Our story began in the nineties! The Uttarakhand community in
              Singapore constituted of a small group of families who had
              migrated to Singapore following work opportunities. As more
              families came to Singapore and the unique surnames from Uttrakhand
              started appearing in offices and organisations, the group members
              would organically connect and extend a warm welcome with a potluck
              or a simple barbeque in the park, to help create a sense of
              support. Tied together with the common threads of cuisine, music,
              celebrations and the longing to hold on to our roots, the group
              members met every now and then and created informal channels to
              connect and help each other.
            </p>
            <p className="p">
              The idea of the Uttarakhand Association of Singapore came into
              being in 2013 when the aftermath of the Uttarakhand Tsunami
              spurred a collective sense of grief and the need to create a space
              that could hold us in togetherness. Whilst we collected funds for
              the victims of the people affected, it was the commonality of the
              cause and the need for connection that inspired us to create a
              formal organisation that not only honoured our roots but also
              supported our present and future in Singapore.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p className="p">
              The UASG was officially registered in 2014 with 25 families as
              official members. Since then, our numbers have grown and it is
              with a great sense of pride that we reflect back on our journey
              thus far.
            </p>
            <p className="p">
              Our association has been involved in celebrations, charities,
              wellness workshops, entrepreneurship programmes as well as
              promoting our culture within and beyond Singapore. We are
              committed to the social cause of bringing our community together
              and building experiences and memories that help us celebrate our
              traditions and also pass on our cultural richness to our next
              generation. At the same time the UASG is also committed to
              honouring Singapore and support the nation building by offering
              our unique talents and skills to the extended community, be it
              through cultural connections or volunteerism.
            </p>
          </div>
          <div className="about__section-image">
            <img src={Image} alt="logo" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={Image} alt="logo" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p className="p">
              The Uttarakhand Association of Singapore (UASG) aims to create a
              strong and united community by valuing our cultural identities
              through the promotion and celebration of Uttarakhand culture and
              heritage. We strive to facilitate connections and nurturing
              relationships among Uttarakhandi families in Singapore, fostering
              a sense of belonging.
            </p>
            <p className="p">
              Additionally, we actively promote Uttarakhandi talents and
              businesses by creating opportunities through socio-cultural
              events. UASG is committed to supporting Uttarakhandi families in
              need and also works towards building connections within the wider
              Singapore community, promoting diversity and harmony.
            </p>
            <p className="p">
              Lastly, we extend our support to the local community through
              volunteerism and fundraising initiatives, contributing positively
              to society.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
