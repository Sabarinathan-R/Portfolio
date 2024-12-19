import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/crazy.sabari"
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
      >
        <i className="uil uil-instagram"></i>
        <span className="home__social-tooltip">Instagram</span>
      </a>
      <a
        href="https://www.linkedin.com/in/sabarinathan-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
      >
        <i className="uil uil-linkedin"></i>
        <span className="home__social-tooltip">LinkedIn</span>
      </a>
      <a
        href="https://github.com/Sabarinathan-R"
        target="_blank"
        rel="noopener noreferrer"
        className="home__social-icon"
      >
        <i className="uil uil-github-alt"></i>
        <span className="home__social-tooltip">GitHub</span>
      </a>
      <a
        href="tel:+8124519096"
        rel="noopener noreferrer"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-phone"></i>
        <span className="home__social-tooltip">Phone</span>
      </a>
    </div>
  );
};

export default Social;