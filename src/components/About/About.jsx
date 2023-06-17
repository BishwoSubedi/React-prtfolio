import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { TbAward } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h4>Get To Know</h4>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__Me">
          <div className="about__me-image">
            <img src={ME} alt="not found" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about__icon" />
              <h4>Experience</h4>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h4> Clients</h4>
              <small>200+ WorldWide</small>
            </article>
            <article className="about__card">
              <VscProject className="about__icon" />
              <h4> Projects</h4>
              <small>30+ Completed Projects</small>
            </article>
            <div>
              <p>              
              Lorem ipsum dolor sit amet consectetur adipisicing elit amet!
              </p>
              <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
