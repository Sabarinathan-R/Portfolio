import React from "react";
import { send } from "../../assets/assets";
import TextDecrypt from "../Utils/TextDecrypt";
import { TypeAnimation } from "react-type-animation";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        <TextDecrypt text={"Sabarinathan R"} />
      </h1>

      <TypeAnimation
        sequence={[
          "Flutter Developer",
          3000,
          "Mobile App Developer",
          3000,
          "Cross-Platform App Developer",
          3000,
        ]}
       
        cursor={false}
        wrapper="span"
        speed={5}
        className="home__subtitle"
        repeat={Infinity}
      />

      <p className="home__description">
        A passionate Mobile-App Developer specializing in the Flutter and Dart, based
        in Salem, India.
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <img src={send} alt="send icon" className="button__icon" />
      </a>
    </div>
  );
};

export default Data;
