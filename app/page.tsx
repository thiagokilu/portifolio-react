import About from "@/Components/About/About";
import Companies from "@/Components/Companies/Companies";
import Contact from "@/Components/Contact/Contact";
import ContractedServices from "@/Components/ContractedServices/ContractedServices";
import FeaturedClients from "@/Components/FeaturedClients/FeaturedClients";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import LoadingPage from "@/Components/LoadingPage";
import ProgressScrollBar from "@/Components/ProgressScrollBar/ProgressScrollBar";
import Projects from "@/Components/Projects/Projects";
import Skills from "@/Components/Skills/Skills";

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
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
