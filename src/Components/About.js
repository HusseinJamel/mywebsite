import React from "react";
import SectionTitle from "../UI/SectionTitle"
import { FcAbout } from "react-icons/fc";


const About = () => {


  return (
    <section id="about">
      <div className="container about-container">
      <SectionTitle 
      icon={<FcAbout />}
      title="Abuot Me"
      />
      
      <div className="about-image-box">
        <div className="image-frame">
          
        </div>
      </div>
      </div>
    </section>
  )
};

export default About;