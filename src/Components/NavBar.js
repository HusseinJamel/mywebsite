import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [isActive, setIsActive] = useState("#");
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <div className="navbar">
    
    <div className="nav-logo">
    <h2><a href="#" onClick={()=>{
      setIsActive("#"); setIsNavShowing(false)
    }} className={isActive ==="#" ? "acrive" : ""}>Hussein.</a></h2>
    </div>
    
    <div className="nav-links">
    <ul className={` nav ${isNavShowing ? "show-nav" : "hide-nav"}`}>
    <li>
    <a 
    href="#" 
    onClick={()=>{
        setIsActive("#");
        setIsNavShowing(false);
    }} 
    className={isActive === "#" ? "active" : ""}>Home
    </a>
    </li>
    
    <li>
    <a 
    href="#about" 
    onClick={()=>{
        setIsActive("#about");
        setIsNavShowing(false);
    }} 
    className={isActive === "#about" ? "active" : ""}>
    About
    </a>
    </li>
    
    <li>
    <a 
    href="#skills" 
    onClick={()=>{
        setIsActive("#skills");
        setIsNavShowing(false);
    }} 
    className={isActive === "#skills" ? "active" : ""}>
    Skills
    </a>
    </li>
    
    <li>
    <a 
    href="#portfolio" 
    onClick={()=>{
        setIsActive("#portfolio");
        setIsNavShowing(false);
    }} 
    className={isActive === "#portfolio" ? "active" : ""}>
    Portfolio
    </a>
    </li>
    
    <li>
    <a 
    href="#contact"
    onClick={()=>{
        setIsActive("#contact");
        setIsNavShowing(false);
    }} 
    className={isActive === "#contact" ? "active" : ""}>
    Contact
    </a>
    </li>
    </ul>
    
    <button className="toggle-btn" onClick={()=> setIsNavShowing(prev => !prev)}>
    {isNavShowing ? <AiOutlineClose/> : <BiMenu/>}
    </button>
    
    </div>
    
    </div>
  )
};

export default NavBar;