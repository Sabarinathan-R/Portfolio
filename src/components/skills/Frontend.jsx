import React from "react";

const Frontend = () => {
  const frontendSkills3 = [
    {
      name: "Flutter",
      icon: "bx bxl-flutter skills_icon",
    },
    {
      name: "Dart",
      icon: "fa-brands fa-dart-lang skills_icon dart",
    },

    {
      name: "Python",
      icon: "bx bxl-python skills_icon",
    },
  ];
  const frontendSkills6 = [
    {
      name: "Swift",
      icon: "fa-brands fa-swift skills_icon swift",
    },
    {
      name: "Android",
      icon: "bx bxl-android skills_icon",
    },
    {
      name: "IOS",
      icon: "bx bxl-apple skills_icon",
    },
  ];
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {frontendSkills3.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {frontendSkills6.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
