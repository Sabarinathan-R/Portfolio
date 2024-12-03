import React from "react";

const Backend = () => {
  const backendSkills3 = [
    {
      name: "Node.js",
      icon: "bx bxl-nodejs skills_icon",
    },
    {
      name: "MongoDB",
      icon: "bx bxl-mongodb skills_icon",
    },
    {
      name: "Firebase",
      icon: "bx bxl-firebase skills_icon",
    },
  ];
  const backendSkills6 = [
    {
      name: "SQL",
      icon: "bx bxl-postgresql skills_icon",
    },
    {
      name: "Java",
      icon: "bx bxl-java skills_icon",
    },
    {
      name: "PHP",
      icon: "bx bxl-php skills_icon",
    },
  ];
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {backendSkills3.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {backendSkills6.map((skill, index) => (
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

export default Backend;

