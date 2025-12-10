import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import ContractedServices from "@/Components/ContractedServices/ContractedServices";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/Skills";
import React from "react";

export default function home() {
  return (
    <div className="flex flex-col gap-44">
      <Hero />
      <Skills />
      <About />
      <Projects />
      <ContractedServices />
      <Contact />
      <Footer />
    </div>
  );
}
