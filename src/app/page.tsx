import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaFigma, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaCss3, FaJsSquare } from "react-icons/fa";
import logo from '../../assets/icons/logo.png'
import logoFigma from '../../assets/icons/Figma-logo.png'
import soundifyCard from '../../assets/imagens/soundify-card.jpeg';
import appFilaCard from '../../assets/imagens/app-fila-card.jpeg';
import recycleCard from '../../assets/imagens/recycle-card.jpeg';
import conversorMoedasCard from '../../assets/imagens/Conversor-de-moedas.png';
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Slider } from "../../components/slider";
import { Card } from "../../components/card";

export default function Home() {
  return (
    <div className="">
      <Header/>

      <div className="flex justify-center items-center text-2xl mt-20">
        <h1>"Transformando ideias em experiências digitais únicas."</h1>
      </div>

      <Slider/>

     <main>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <h2 className="text-4xl font-bold text-center mb-16">Projetos Recentes</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  <Card
  linkProjeto="https://soundify-five.vercel.app/"
  linkImg='https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570943/soundify-card_dmwzyv.jpg'
  title="Soundify"
  description="Plataforma de streaming musical com integração de API e player customizado."
  icons={
    <div className="flex gap-3 text-xl mb-3">
      <FaHtml5 />
      <FaCss3Alt />
      <FaJsSquare />
    </div>}
/>
<Card
  linkProjeto="https://www.figma.com/design/j5V2lLkMvaBj4paCLMuO0q/Recycle-Ecology-aplicativo?%20%20%20%20%20%20%20%20%20%20%20%20m=auto&t=BYEtO2oW52ksOpcC-1"
  linkImg='https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570943/recycle-card_onlqvx.jpg'
  title="Recycle Ecology"
  description="Aplicação para incentivar a reciclagem e conscientização ambiental."
  icons={
    <div className="flex gap-3 text-xl mb-3">
      <FaFigma/>
    </div>}
/>
<Card
  linkProjeto="https://www.figma.com/design/Z9jPdhmS9ZbBQQQ069BUYW/App-gestor-de-filas?%20%20%20%20%20%20%20%20%20%20%20%20%20%20m=auto&t=QOxXndDzC64ielbQ-6"
  linkImg='https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570945/app-fila-card_rrkrft.jpg'
  title="Hora Marcada"
  description="Sistema de agendamento para otimizar filas e atendimento."
  icons={
    <div className="flex gap-3 text-xl mb-3">
      <FaFigma/>
    </div>}
/>
<Card
  linkProjeto="https://conversor-de-moedas-tau.vercel.app/"
  linkImg='https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570944/Conversor-de-moedas_slqqe6.png'
  title="Conversor de Moedas"
  description="Ferramenta para conversão de moedas em tempo real com atualização de taxas."
  icons={
    <div className="flex gap-3 text-xl mb-3">
      <FaHtml5 />
      <FaCss3Alt />
      <FaJsSquare />
    </div>}
/>
<Card
  linkProjeto="https://todo-list-eta-vert.vercel.app/"
  linkImg='https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570943/todo-list_inrr7o.png'
  title="Todo-list"
  description="Aplicação para gerenciamento de tarefas com funcionalidades de organização."
  icons={
    <div className="flex gap-3 text-xl mb-3">
      <FaHtml5 />
      <FaCss3Alt />
      <FaJsSquare />
    </div>}
/>
<Card
  linkProjeto="https://nature-ecomerce.vercel.app/"
  linkImg='https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570945/nature-ecomerce_j5cbwq.png'
  title="Nature E-commerce"
  description="Loja virtual focada em produtos sustentáveis e ecológicos."
  icons={
    <div className="flex gap-3 text-xl mb-3">
      <FaHtml5 />
      <FaCss3Alt />
      <FaJsSquare />
    </div>}
/>
    </div>
</div>
     </main>
     <Footer/>
      
    </div>
  );
}
