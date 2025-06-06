import { Header } from "../components/header";
import { Footer } from "../components/Footer";
import { Slider } from "../components/slider";
import { About_me } from "../components/about-me";
import { CardGroup } from "../components/card-group";
import { ContactForm } from "../components/contact-form";
import { Projetos } from "../components/Projetos";
import { SocialLinks } from "../components/SocialLinks";
import { useState } from "react";

export default function App() {
  const [numCard, setNumCard] = useState(0);
  const [openProjects, setOpenProjects] = useState(false);
  return (
    <div className="bg-[#0f172a] text-white bg-gradient-to-br from-gray-900 to-gray-800">
      <Header setNumCard={setNumCard} setOpenProjects={setOpenProjects} />
      {numCard === 0 ? (
        <About_me />
      ) : numCard === 1 ? (
        <Projetos setOpenProjects={setOpenProjects} />
      ) : numCard === 2 ? (
        <SocialLinks />
      ) : numCard === 3 ? (
        <ContactForm />
      ) : null}

      {openProjects && <CardGroup />}

      {/* <div className="flex justify-center items-center text-2xl mt-20 flex-wrap">
        <h1
          id="page__title"
          className="sub-header text-2xl lg:text-4xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent  break-words whitespace-normal text-center"
        >
          "Transformando ideias em experiências digitais únicas."
        </h1>
      </div> */}

      {/* <Slider />

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            Projetos Recentes
          </h2>
          <CardGroup />
        </div>
      </main>
      <h2
        id="contact__title"
        className="text-4xl font-semibold flex items-center justify-center"
      >
        Contato
      </h2>
      <ContactForm />
      <Footer /> */}
    </div>
  );
}
