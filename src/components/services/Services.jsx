import React from "react";
import ServiceItem from "./ServiceItem";
import "./service.css";
import { laptop, responsive, web } from "../../assets/assets";

const Services = () => {
    const servicesData = [
        {
          title: "APP DESIGNING",
          description: "Crafting visually appealing and user-friendly applications that engage and inspire users.",
          icon: web,
        },
        {
          title: "APP DEVELOPMENT",
          description: "Building robust and scalable mobile applications tailored to meet your business needs.",
          icon: responsive,
        },
        {
          title: "RESPONSIVE DESIGN",
          description: "Ensuring seamless user experiences across all devices with adaptive and responsive designs.",
          icon: laptop,
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
