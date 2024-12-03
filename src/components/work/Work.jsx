import React, { useState } from "react";
import "./work.css";
import Projects from "./Projects";
import {
  ayush,
  catbuild,
  community,
  dlr,
  expert,
  firstlook,
  lm,
  nutask,
  siddha360,
  spaceexplorer,
} from "../../assets/projects";

const projects = [
  {
    name: "Expert Internal",
    description:
      "A centralized task management platform using Flutter, PHP, SQL, and Firebase for real-time notifications and workflow optimization.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase", "Mapping"],
    link: "https://play.google.com/store/apps/details?id=com.nulinz.expert",
    // github: "https://apps.apple.com/in/app/expert-corporate-solutions/id6737750418",
    image: expert,
    category: "Android",
  },
  {
    name: "DLR",
    description:
      "Onstru DLR is an AI-powered app that automates attendance tracking with face recognition for improved accuracy and efficiency.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase", "Python", "OpenCV", "MLKit", "API Intergration"],
    link: "https://play.google.com/store/apps/details?id=com.onstru.dlr",
    // github: "https://github.com/sayyidmarvanvt/Exedo-estate",
    image: dlr,
    category: "Android",
  },
  {
    name: "Nulinz Community",
    description:
      "The Nulinz Community app for professionals to find jobs, connect, and apply for global events, boosting networking.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.nulinz.community",
    // github: "https://github.com/sayyidmarvanvt/jmk",
    image: community,
    category: "Android",
  },
  {
    name: "Ayush Clinic",
    description:
      "A hospital management app to streamline appointments, patient records, prescriptions, treatments, and vendor details for improved healthcare.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.nulinz.ayushclinicapp",
    // github: "https://github.com/sayyidmarvanvt/modern-bankapp",
    image: ayush,
    category: "Android",
  },
  {
    name: "LuckyMatrimony",
    description:
      "A matrimonial app with personalized matchmaking, chat, subscriptions, privacy settings, and secure payment gateway for tailored user experience.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.luckymatrimony.app",
    // github: "https://github.com/sayyidmarvanvt/Disney-clone",
    image: lm,
    category: "Android",
  },
  {
    name: "Catbuild",
    description:
      "A construction project management app with tools for tracking progress, budgets, scheduling, and team communication to ensure efficiency.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.nulinz.catbuild",
    // github: "https://github.com/sayyidmarvanvt/Gemini",
    image: catbuild,
    category: "Android",
  },
  {
    name: "Nutask",
    description:
      "NuTask, A task management app with real-time notifications, prioritization, status updates, and team collaboration for streamlined workflow.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.nulinz.nutask",
    // github: "https://github.com/sayyidmarvanvt/small-shopping-cart",
    image: nutask,
    category: "Android,",
  },
  {
    name: "Siddha 360",
    description:
      "Siddha 360, An interactive app with immersive animations, courses, and practical applications for Siddha medicine learners.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.nulinz.siddhaedu",
    // github: "https://github.com/sayyidmarvanvt/nike-front",
    image: siddha360,
    category: "Android",
  },
  {
    name: "FirstLook",
    description:
      "FirstLook, A productivity-boosting notes app with an intuitive interface, offering features like tags, categorization, and cloud syncing to enhance note organization, memory retention, and cross-device accessibility.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.mpeople.memorise",
    // github: "https://github.com/sayyidmarvanvt/nike-front",
    image: firstlook,
    category: "Android",
  },
  {
    name: "Space Explorer",
    description:
      "Space Explorer, An interactive educational app with animated simulations to explore planets and the solar system in a fun, engaging way!",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.nulinz.spaceexplorer",
    // github: "https://github.com/sayyidmarvanvt/nike-front",
    image: spaceexplorer,
    category: "Android",
  },
  {
    name: "Expert Internal",
    description:
      "A centralized task management platform using Flutter, PHP, SQL, and Firebase for real-time notifications and workflow optimization.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase", "Mapping"],
    link: "https://apps.apple.com/in/app/expert-corporate-solutions/id6737750418",
    // github: "https://apps.apple.com/in/app/expert-corporate-solutions/id6737750418",
    image: expert,
    category: "IOS",
  },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="work section" id="work">
      <h2 className="section__title">Work</h2>
      <span className="section__subtitle">Most Recent Works</span>

      <div className="work__filters container grid">
        <button
          className={`work__item ${selectedCategory === "All" ? "active-work" : ""
            }`}
          onClick={() => setSelectedCategory("All")}
        >
          ALL
        </button>
        <button
          className={`work__item ${selectedCategory === "Android" ? "active-work" : ""
            }`}
          onClick={() => setSelectedCategory("Android")}
        >
          ANDROID
        </button>
        <button
          className={`work__item ${selectedCategory === "IOS" ? "active-work" : ""
            }`}
          onClick={() => setSelectedCategory("IOS")}
        >
          IOS
        </button>
      </div>

      <Projects projects={filteredProjects} />
    </section>
  );
};

export default Work;
