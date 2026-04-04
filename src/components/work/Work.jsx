import React, { useState } from "react";
import "./work.css";
import Projects from "./Projects";
import {
  ayush,
  catbuild,
  community,
  dlr,
  expert,
  lm,
  nutask,
  siddha360,
  spaceexplorer,
  onstruSuper,
  aiAtSite,
  driversDeck,
  dacdiag,
  merapayment,
  cogosmart,
  onstruMart,
  onstruPorter,
  rootmentsLogo,
  infinityCNX,
  magaranthamMart,
  livingBrains,
  cTechLogo,
  velanCalendarLogo,
} from "../../assets/projects";

const projects = [
  {
    name: "Onstru Super",
    description: "A specialized construction social platform featuring social feeds, messaging, and e-commerce modules to grow your industry network.",
    stacks: ["Flutter", "Dart", "Cashfree", "Deeplinking", "Laravel", "AWS S3", "State Optimization"],
    link: "https://play.google.com/store/apps/details?id=com.onstru.superapp",
    image: onstruSuper,
    category: "Android",
  },
  {
    name: "DLR",
    description: "An AI-driven construction management app specializing in automated facial recognition attendance to boost site productivity and tracking accuracy.",
    stacks: ["Flutter", "TensorFlow", "Face Recognition", "Facial Attendance", "Local Storage", "Dart", "PHP", "MySQL", "Firebase", "Python", "OpenCV", "MLKit"],
    link: "https://play.google.com/store/apps/details?id=com.onstru.dlr",
    image: dlr,
    category: "Android",
  },
  {
    name: "AI@site",
    description: "An AI-powered assistant for site documentation, utilizing RAG and Gemini models to provide instant on-field project insights and streamline workflows.",
    stacks: ["AI-Chat", "AI-Assistant", "RAG", "FastAPI", "Swagger", "Python", "Gemini Models"],
    link: "https://play.google.com/store/apps/details?id=com.aisite.app",
    image: aiAtSite,
    category: "Android",
  },
  {
    name: "Drivers Deck",
    description: "A comprehensive platform connecting car owners with acting and permanent drivers, featuring real-time GPS tracking and secure hiring options.",
    stacks: ["Flutter", "Dart", "Laravel", "Live Map Update", "Razor Pay", "Driver Management"],
    link: "https://play.google.com/store/apps/details?id=com.driversdeck.app",
    image: driversDeck,
    category: "Android",
  },
  {
    name: "DacDiag",
    description: "A digital healthcare platform offering secure online appointments and video consultations with integrated report sharing for patients and doctors.",
    stacks: ["Video Call Service", "Agora Kit", "Healthcare Management", "Consulting Booking"],
    link: "https://play.google.com/store/apps/details?id=com.dacdiag.app",
    image: dacdiag,
    category: "Android",
  },
  {
    name: "Merapayment",
    description: "An AI-powered construction management app for automated attendance and financial tracking, including labor invoicing and a structured legal escalation process for payments.",
    stacks: ["Legal Escalation", "Multilingual Support", "TensorFlow", "Face Recognition", "Facial Attendance", "Flutter", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.onstru.merapayment",
    image: merapayment,
    category: "Android",
  },
  {
    name: "Rootments",
    description: "A powerful task management and CRM solution designed to streamline employee workflows, enhance productivity, and manage textile store operations.",
    stacks: ["CRM", "Logistics", "Textile Management", "Task Management"],
    link: "https://play.google.com/store/apps/details?id=com.rootments.app",
    image: rootmentsLogo,
    category: "Android",
  },
  {
    name: "CogoSmart",
    description: "A specialized mobile billing app for the Tender Coconut sector, streamlining sales management, bulk order handling, and instant bill generation.",
    stacks: ["Coconut Trading", "Calculative", "Financial Analysis", "Flutter", "Laravel"],
    link: "https://play.google.com/store/apps/details?id=com.cogosmart.app",
    image: cogosmart,
    category: "Android",
  },
  {
    name: "Onstru Mart",
    description: "A reseller-based e-commerce platform empowering users to earn profits by placing orders on behalf of customers without managing inventory.",
    stacks: ["Ecommerce", "Payment Integration", "Reseller Model", "Order Management"],
    link: "https://play.google.com/store/apps/details?id=com.onstru.mart",
    image: onstruMart,
    category: "Android",
  },
  {
    name: "Velan Calendar",
    description: "A comprehensive offline Tamil calendar app with monthly views, daily spiritual guides, and cultural insights, supporting offline accessibility and time conversion.",
    stacks: ["Tamil Calendar", "Offline App", "Excel Export", "Time Calculation"],
    link: "https://play.google.com/store/apps/details?id=com.velan.calendar",
    image: velanCalendarLogo,
    category: "Android",
  },
  {
    name: "Onstru Porter",
    description: "A delivery partner app featuring real-time tracking, secure OTP-based order verification, and background location services for streamlined logistics.",
    stacks: ["Ecommerce Delivery", "Product Tracking", "Tracking Update", "Customer Controler"],
    link: "https://play.google.com/store/apps/details?id=com.onstru.porter",
    image: onstruPorter,
    category: "Android",
  },
  {
    name: "CNX - Civil Leads",
    description: "A centralized platform for construction business growth, connecting contractors and customers while simplifying lead and project management with secure biometric authentication.",
    stacks: ["Sales Management", "Alarm System", "Lead Management", "Secure Biometric"],
    link: "https://play.google.com/store/apps/details?id=com.infinity.cnx",
    image: infinityCNX,
    category: "Android",
  },
  {
    name: "Magarantham Mart",
    description: "A comprehensive e-commerce platform for daily essentials, delivering groceries, household items, and personal care products with a smooth shopping experience.",
    stacks: ["Ecommerce", "Retail Management", "Order Management", "Payment Integration"],
    link: "https://play.google.com/store/apps/details?id=com.magarantham.customer",
    image: magaranthamMart,
    category: "Android",
  },
  {
    name: "Living Brains",
    description: "A secure report generation and verification platform for Admins and Clients, featuring real-time approval workflows and transparent document management.",
    stacks: ["Smart Report", "Client Management", "Logistics", "Workflow Management"],
    link: "https://play.google.com/store/apps/details?id=com.lb.internal.app",
    image: livingBrains,
    category: "Android",
  },
  {
    name: "Expert Internal",
    description: "A centralized task management platform using Flutter, PHP, SQL, and Firebase for real-time notifications and workflow optimization.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase", "Mapping"],
    link: "https://play.google.com/store/apps/details?id=com.nulinz.expert",
    image: expert,
    category: "Android",
  },
  {
    name: "Nulinz Community",
    description: "The Nulinz Community app for professionals to find jobs, connect, and apply for global events, boosting networking.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.nulinz.community",
    image: community,
    category: "Android",
  },
  {
    name: "Ayush Clinic",
    description: "A hospital management app to streamline appointments, patient records, prescriptions, treatments, and vendor details for improved healthcare.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.nulinz.ayushclinicapp",
    image: ayush,
    category: "Android",
  },
  {
    name: "LuckyMatrimony",
    description: "A matrimonial app with personalized matchmaking, chat, subscriptions, privacy settings, and secure payment gateway for tailored user experience.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.luckymatrimony.app",
    image: lm,
    category: "Android",
  },
  {
    name: "Catbuild",
    description: "A construction project management app with tools for tracking progress, budgets, scheduling, and team communication to ensure efficiency.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.nulinz.catbuild",
    image: catbuild,
    category: "Android",
  },
  {
    name: "Nutask",
    description: "NuTask, A task management app with real-time notifications, prioritization, status updates, and team collaboration for streamlined workflow.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.nulinz.nutask",
    image: nutask,
    category: "Android,",
  },
  {
    name: "Siddha 360",
    description: "Siddha 360, An interactive app with immersive animations, courses, and practical applications for Siddha medicine learners.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.nulinz.siddhaedu",
    image: siddha360,
    category: "Android",
  },
  {
    name: "Space Explorer",
    description: "Space Explorer, An interactive educational app with animated simulations to explore planets and the solar system in a fun, engaging way!",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.nulinz.spaceexplorer",
    image: spaceexplorer,
    category: "Android",
  },
  {
    name: "Expert Internal",
    description: "A centralized task management platform using Flutter, PHP, SQL, and Firebase for real-time notifications and workflow optimization.",
    stacks: ["Flutter", "Dart", "PHP", "MySQL", "Firebase", "Mapping"],
    link: "https://apps.apple.com/in/app/expert-corporate-solutions/id6737750418",
    image: expert,
    category: "IOS",
  },
  {
    name: "Onstru Super",
    description: "A specialized construction social platform featuring social feeds, messaging, and e-commerce modules to grow your industry network.",
    stacks: ["Flutter", "Dart", "Cashfree", "Deeplinking", "Laravel", "AWS S3", "State Optimization"],
    link: "https://apps.apple.com/us/app/onstru/id6748594477",
    image: onstruSuper,
    category: "IOS",
  },
  {
    name: "Rootments",
    description: "A powerful task management and CRM solution designed to streamline employee workflows, enhance productivity, and manage textile store operations.",
    stacks: ["CRM", "Logistics", "Textile Management", "Task Management"],
    link: "https://apps.apple.com/us/app/rootments/id6742770148",
    image: rootmentsLogo,
    category: "IOS",
  },
  {
    name: "C-Tech",
    description: "A streamlined app for viewing verified company profiles and official documents through secure link-based access with a clean interface.",
    stacks: ["Company Verification", "Document Viewer", "Secure Access"],
    link: "https://apps.apple.com/us/app/c-tech/id6753121830",
    image: cTechLogo,
    category: "IOS",
  },
  {
    name: "Velan Calendar",
    description: "A comprehensive offline Tamil calendar app with monthly views, daily spiritual guides, and cultural insights, supporting offline accessibility and time conversion.",
    stacks: ["Tamil Calendar", "Offline App", "Excel Export", "Time Calculation"],
    link: "https://apps.apple.com/us/app/velan-calendar/id6758392934",
    image: velanCalendarLogo,
    category: "IOS",
  },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects.filter((project) => project.category === "Android")
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
