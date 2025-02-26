import Image from "next/image";
import Link from "next/link";
import {FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import cyberBaget from '../../../assets/icons/introduction-to-cybersecurity (3).png'
import perfilPicutre from '../../../assets/imagens/perfil.png'
import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";
import logoFigma from "../../../assets/icons/Figma-logo.png"

export default function About() {
  return (
    <div>
        <Header/>
    <section id="about" className="about flex flex-wrap items-center mt-10 ml-7 mr-7">
      <div className="about__left flex-1 p-4">
        <h1 className="about__title text-3xl font-bold">Olá, eu sou Thiago!</h1>
        <p className="about__text mt-4 text-gray-700 text-xl">
          Tenho 21 anos, formado em Gestão em Tecnologia da Informação. Tenho
          conhecimentos em HTML, CSS, JavaScript, Git e metodologias ágeis. Sou
          apaixonado por tecnologia e estou sempre em busca de novos desafios
          para aprimorar minhas habilidades e contribuir com projetos
          inovadores.
        </p>
        <div className="courses flex gap-4 mt-4">
          <Link href="#" title="Figma">
          <Image
              src={logoFigma}
              alt="Cybersecurity Badge"
              width={20}
              height={20}
            />
          </Link>


          <Link href="#" title="HTML5">
            <FaHtml5 className="text-[#e34f26] text-3xl" />
          </Link>
          <Link href="#" title="CSS3">
            <FaCss3Alt className="text-[#1572b6] text-3xl" />
          </Link>
          <Link href="#" title="JavaScript">
            <FaJs className="text-[#f7df1e] text-3xl" />
          </Link>
          <Link href="#" title="Git">
            <FaGitAlt className="text-[#f05032] text-3xl" />
          </Link>
          <Link
            href="https://www.credly.com/badges/b171edcd-9e83-49fe-8beb-708554115286"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={cyberBaget}
              alt="Cybersecurity Badge"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
      <div className="right-0    ">
        <Image
          src={perfilPicutre}
          alt="Perfil"
          width={350}
          height={350}
          className="rounded-full"
        />
      </div>
    </section>
    <Footer/>
    </div>
    
  );
}
