// src/modules/home/page/HomePage.tsx
import React from "react";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";

export const HomePage: React.FC = () => {
 
  return (
    <>
      <Hero />
      <Services />
    </>
  );
};

export default HomePage;
