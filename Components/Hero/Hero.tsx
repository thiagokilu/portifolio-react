"use client";

import { FileDown } from "lucide-react";
import photo from "../../public/imagens/perfil.png";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMouse } from "react-icons/lu";
import Header from "../Header/Header";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function Hero() {
  return (
    <div>
      <Header />

      <div id="Hero" className="relative min-h-screen overflow-hidden">
        {/* ---------------- FUNDO (NÃO MEXI) ---------------- */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:60px_100%]"></div>

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:100%_60px]"></div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30"></div>

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.05)_0%,transparent_70%)]"></div>
        </div>

        {/* ---------------- CONTEÚDO ANIMADO ---------------- */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-evenly px-10 gap-14"
        >
          {/* Texto */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 max-w-xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Hello I'm{" "}
              <span className="text-purple-primary drop-shadow-md">Thiago</span>
            </h1>

            <span className="text-xl font-light text-gray-400">
              Front-end Developer
            </span>

            <p className="text-lg text-gray-500">
              Desenvolvedor especializado em interfaces modernas e de alto
              desempenho, com foco em acessibilidade e experiência do usuário.
            </p>

            {/* Botão */}
            <motion.div
              variants={fadeUp}
              className="flex flex-row gap-5 text-lg font-semibold mt-3"
            >
              <a
                href="/files/curriculo-thiago-portifolio.pdf"
                download="curriculo-thiago.pdf"
                className="bg-purple-primary flex items-center justify-center gap-2 text-white px-8 py-3 rounded-full transition-all duration-300 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-300/30"
              >
                <FileDown />
                Download CV
              </a>
            </motion.div>

            {/* Ícones sociais */}
            <motion.div
              variants={fadeUp}
              className="flex flex-row gap-6 mt-5 text-3xl"
            >
              <a
                href="https://github.com/thiagokilu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-primary transition-colors duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/thiago-alexandre-cavalcante/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-primary transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </motion.div>

            {/* Scroll */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400">
              <LuMouse className="text-4xl animate-bounce" />
              <span className="mt-2 text-sm tracking-widest animate-pulse">
                scroll
              </span>
            </div>
          </motion.div>

          {/* Foto */}
          <motion.div
            variants={fadeUp}
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-purple-500 to-purple-700 shadow-xl shadow-purple-400/30 hover:scale-105 transition-all duration-500 ease-out"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10">
              <Image
                src={photo}
                alt="Perfil"
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-2xl rounded-full -z-10"></div>
          </motion.div>
        </motion.div>

        {/* Elementos flutuantes (mantidos!) */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}
