// src/modules/home/page/HomePage.tsx
import React from "react";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { TrustUs } from "../components/TrustUs";
import { Contact } from "../components/Contact";
import { Procedures } from "../components/Procedures";
import { Equipment } from "../components/Equipment";

export const HomePage: React.FC = () => {
 
  return (
    <>
      <Hero />
      <Services />
      <TrustUs />
      <Contact />
      <Procedures />
      <Equipment />
    </>
  );
};

export default HomePage;
