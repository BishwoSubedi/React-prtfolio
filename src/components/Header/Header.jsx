import React from "react";
import "./header.css";
import ME from "../../assets/me.png";
import PDA from "./PDA";
import Socail from "./Socail";


const Header = () => {
  return (
    <header id="head">
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Bishwo Subedi</h1>
        <h4 className="text-light"> Full Stack Developer</h4>
        <PDA />
         <Socail/>
        <div className="profile-me">
          <img src={ME} alt="not found" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  
  );
};

export default Header;
