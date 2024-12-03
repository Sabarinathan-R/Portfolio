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
            Flutter Developer with 10 months of experience in Dart, Firebase, SQL, Node.js, and MongoDB. Developed and launched 12 apps (11 on Google Play, 1 on the App Store). Proficient in Git, Agile methodologies, and experienced in Java and Android development.
          </p>
          <a download="Sabarinathan_Resume.pdf" href={resume} className="button button--flex">
            Download CV
            <img src={files} alt="" className="button__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
