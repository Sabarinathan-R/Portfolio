import React from "react";

const SkillComponent = ({ title, skills }) => {
  // Split skills into two columns
  const midIndex = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, midIndex);
  const rightSkills = skills.slice(midIndex);

  return (
    <div className="skills__content">
      <h3 className="skills__title">{title}</h3>
      <div className="skills__box">
        <div className="skills__group">
          {leftSkills.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {rightSkills.map((skill, index) => (
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

export default SkillComponent;
