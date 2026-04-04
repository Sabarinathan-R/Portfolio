import React from "react";
import ServiceItem from "./ServiceItem";
import "./service.css";
import { laptop, responsive, web, send, deployment } from "../../assets/assets";

const Services = () => {
  const servicesData = [
    {
      title: "Mobile App Design",
      description: "Designing modern, intuitive, and user-centric mobile interfaces with a strong focus on usability, performance, and real-world user experience.",
      icon: web,
    },
    {
      title: "Mobile App Development",
      description: "End-to-end development of high-performance Flutter applications, from concept to deployment, with scalable architecture, clean code practices, and seamless API integrations.",
      icon: responsive,
    },
    {
      title: "App Deployment & Store Setup",
      description: "Assisting with complete Play Store and App Store deployment, including: Developer account setup (Individual / Organization), App publishing & compliance, and handling App Store review guidelines.",
      icon: deployment,
    },
  ];

  return (
    <section className="services section " id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container grid">
        {servicesData.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
