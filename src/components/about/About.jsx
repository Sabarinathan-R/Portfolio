import React from "react";
import "./about.css";
import { files, resume, work2 } from "../../assets/assets";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={work2} alt="" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            I’m a Flutter Developer with 2.5+ years of experience, having built and deployed 25+ mobile applications across multiple domains. I specialize in Flutter, API integration, state management, and app deployment. I’m passionate about building scalable, real-world applications and continuously improving my skills.
          </p>
          <a download="Sabarinathan_R Resume.pdf" href={resume} className="button button--flex">
            Download CV
            <img src={files} alt="" className="button__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
