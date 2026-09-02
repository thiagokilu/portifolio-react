import About from "@/Components/About/About";
import Companies from "@/Components/Companies/Companies";
import ContractedServices from "@/Components/ContractedServices/ContractedServices";
import FeaturedClients from "@/Components/FeaturedClients/FeaturedClients";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import LoadingPage from "@/Components/LoadingPage";
import ProgressScrollBar from "@/Components/ProgressScrollBar/ProgressScrollBar";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/Skills";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <ProgressScrollBar />
      <Header />
      <div className="flex flex-col gap-16 md:gap-20">
        <LoadingPage />
        <Hero />
        <Skills />
        <About />
        <FeaturedClients />
        <Companies />
        <ContractedServices />
        <Projects />
        <Footer />
        {/* WhatsApp Button Flutuante */}
        <a
          href="https://wa.me/551161982633158?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Contato via WhatsApp"
        >
          <div className="relative w-14 h-14 bg-[#bc9b48] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
            <FaWhatsapp className="w-7 h-7 text-[#FDFEFD]" />

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-[#2B2A27] text-[#FDFEFD] text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Fale comigo no WhatsApp
            </div>
          </div>
        </a>
      </div>
    </main>
  );
}
