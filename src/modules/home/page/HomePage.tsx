// src/modules/home/page/HomePage.tsx
import React from "react";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { TrustUs } from "../components/TrustUs";
import { Contact } from "../components/Contact";
import { Procedures } from "../components/Procedures";
import { Equipment } from "../components/Equipment";
import { AboutUs } from "../components/AboutUs";

export const HomePage: React.FC = () => {
 
  return (
    <>
      <Hero />
      <AboutUs />
      <TrustUs />
      <Services />
      <Procedures />
      <Equipment />
      <Contact />
    </>
  );
};

export default HomePage;
