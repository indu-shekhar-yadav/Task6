import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Indu Shekhar Yadav",
  },
  {
    label: "Age",
    value: "21",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "Shekharindu21@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 6202956220",
  },
];

const jobSummary =
  "Greetings, Indu Shekhar Yadav! It's a pleasure that you visited. I delight in crafting digital wonders that come alive on the vast canvas of the internet. My passion for development was ignited in 2022. As I embarked on this journey, I serendipitously uncovered the realms of cybersecurity, machine learning, and web development. Amidst this voyage of discovery, I found myself irresistibly drawn towards the enchanting world of web development. Like an artist wielding a brush, I painted my dreams onto the digital canvas, bringing forth vibrant and interactive creations that captivate hearts and minds alike.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={60} />}
        
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="  rgb(97, 188, 183)" />
              </div>
              <div>
                <DiAndroid size={60} color=" rgb(97, 188, 183)" />
              </div>
              <div>
                <FaDatabase size={60} color=" rgb(97, 188, 183)" />
              </div>
              <div>
                <DiApple size={60} color=" rgb(97, 188, 183)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
