import React from "react";
import "./skills.css";
import SkillComponent from "./SkillComponent";

const Skills = () => {
  const expertiseData = [
    {
      title: "Mobile App Development (Core)",
      skills: [
        { name: "Flutter", icon: "bx bxl-flutter skills_icon" },
        { name: "Dart", icon: "fa-brands fa-dart-lang skills_icon dart" },
        { name: "Android Native", icon: "bx bxl-android skills_icon" },
        { name: "iOS Deployment", icon: "bx bxl-apple skills_icon" },
      ],
    },
    {
      title: "Frontend & UI",
      skills: [
        { name: "Responsive UI", icon: "bx bx-devices skills_icon" },
        { name: "Custom Widgets", icon: "bx bx-grid-alt skills_icon" },
        { name: "Animations", icon: "bx bx-run skills_icon" },
        { name: "Cross-platform UI", icon: "bx bx-layout skills_icon" },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: "bx bxl-nodejs skills_icon" },
        { name: "PHP", icon: "bx bxl-php skills_icon" },
        { name: "REST API Integration", icon: "bx bx-transfer-alt skills_icon" },
        { name: "Firebase Service", icon: "bx bxl-firebase skills_icon" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: "bx bxl-mongodb skills_icon" },
        { name: "SQL", icon: "bx bxs-data skills_icon" },
      ],
    },
    {
      title: "Tools & Tech",
      skills: [
        { name: "Git", icon: "bx bxl-git skills_icon" },
        { name: "Postman", icon: "bx bx-code-alt skills_icon" },
        { name: "App Store & Play Store", icon: "bx bx-store-alt skills_icon" },
        { name: "Firebase Console", icon: "bx bxl-firebase skills_icon" },
      ],
    },
    {
      title: "Core Strengths",
      skills: [
        { name: "State Management", icon: "bx bx-brain skills_icon" },
        { name: "Clean Architecture", icon: "bx bx-layer skills_icon" },
        { name: "Performance Opt", icon: "bx bx-tachometer skills_icon" },
        { name: "Real-time Features", icon: "bx bx-time-five skills_icon" },
      ],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Expertise</span>
      <div className="skills__container container grid">
        {expertiseData.map((category, index) => (
          <SkillComponent
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
