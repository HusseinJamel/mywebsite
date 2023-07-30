import React from "react";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";

import Me from "../Images/me.png"

const Header = () => {


  return (
    <section id="#">
    <div className="container header-container">
    
      <div className="header-content-box">
        <h1>Front-End React<br/>Developer 👋</h1>
        
        <p>Hi, I'm Hussein Jamel, A Front-End React<br/>Developer From Iraq.</p>
        
        <div className="header-links">
          <a href="https://www.linkedin.com" target="_blank"><BiLogoLinkedinSquare /></a>
          <a href="https://www.github.com" target="_blank"><BiLogoGithub /></a>
        </div>
        
        <div className="tech-stock">
          <h3>Tech Stock</h3>
          <div className="techs">
            <BiLogoHtml5 />
            <BiLogoCss3 />
            <BiLogoJavascript />
            <BiLogoReact />
          </div>
        </div>
        
        <a href="#about" className="btn hero-btn">Read More</a>
        
      </div>
    
      <div className="header-image-box">
      
        <div className="dots-bg"></div>
      
        <div className="image-bg">
          <img src={Me} alt="not me😎" />
        </div>
      
      </div>
    
    </div>
    </section>
  )
};

export default Header;