"use client";

import { FileDown } from "lucide-react";
import photo from "../../public/imagens/perfil-hero.webp";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import Header from "../Header/Header";
import { motion, type Variants } from "framer-motion";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <div style={{ fontFamily: "var(--font-editorial-serif)" }}>
      <Header />

      <div id="Hero" className="relative min-h-screen overflow-hidden">
        {/* ── GRID DE FUNDO SUTIL ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(147,51,234,0.025)_1px,transparent_1px)] bg-[size:80px_100%]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(147,51,234,0.025)_1px,transparent_1px)] bg-[size:100%_80px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
        </div>

        {/* ── NÚMERO DECORATIVO ── */}

        <IoCodeSlash className="pointer-events-none select-none absolute bottom-8 right-8 text-[clamp(6rem,18vw,16rem)] opacity-[0.025] text-current" />

        {/* ── CONTEÚDO ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col justify-center gap-0"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {/* eyebrow */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-6 mb-6 mt-20 md:mt-0"
          >
            <span
              className="text-[9px] uppercase tracking-[0.4em] opacity-35"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Portfólio
            </span>
            <div className="h-px w-16 bg-current opacity-20" />
            <span
              className="text-[9px] uppercase tracking-[0.4em] opacity-20"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              2025
            </span>
          </motion.div>

          {/* layout principal: texto + foto */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-end">
            {/* TEXTO */}
            <div className="flex flex-col gap-8">
              {/* nome grande */}
              <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <span
                  className="text-[9px] uppercase tracking-[0.4em] opacity-30 mb-2"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Olá, eu sou
                </span>
                <h1
                  className="text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.88] tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Thiago
                  <br />
                  <em
                    className="not-italic text-purple-primary"
                    style={{ fontStyle: "italic", opacity: 0.9 }}
                  >
                    Alexandre
                  </em>
                </h1>
              </motion.div>

              {/* cargo + descrição */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-4 max-w-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-purple-primary opacity-60" />
                  <span
                    className="text-sm font-light tracking-wide opacity-60"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    Desenvolvedor Front-end
                  </span>
                </div>
                <p
                  className="text-base leading-loose opacity-50 font-light"
                  style={{
                    fontFamily: "var(--font-editorial-sans)",
                    fontStyle: "italic",
                  }}
                >
                  Criando experiências digitais modernas e acessíveis.
                </p>
              </motion.div>

              {/* ações */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-8 flex-wrap"
              >
                {/* botão CV */}
                <a
                  href="/files/curriculo-thiago-pt.pdf"
                  download="curriculo-thiago-pt.pdf"
                  className="
                    group relative overflow-hidden
                    border border-current border-opacity-20
                    px-8 py-3
                    text-[9px] uppercase tracking-[0.35em] font-sans
                    flex items-center gap-3
                    md:transition-all md:duration-500 hover:border-opacity-50
                  "
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  <span className="absolute inset-0 bg-purple-primary translate-y-full group-hover:translate-y-0 md:transition-transform md:duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  <FileDown
                    className="w-3.5 h-3.5 relative z-10 group-hover:text-white md:transition-colors md:duration-300"
                    strokeWidth={1.5}
                  />
                  <span className="relative z-10 group-hover:text-white md:transition-colors md:duration-300">
                    Baixar CV
                  </span>
                </a>

                {/* sociais */}
                <div className="flex items-center gap-5">
                  <a
                    href="https://github.com/thiagokilu"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="opacity-30 hover:opacity-80 hover:text-purple-primary md:transition-all md:duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thiago-alexandre-cavalcante/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="opacity-30 hover:opacity-80 hover:text-purple-primary md:transition-all md:duration-300"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* FOTO */}
            <motion.div
              variants={fadeUp}
              className="group relative w-64 h-80 md:w-72 md:h-96 shrink-0 self-end"
            >
              {/* moldura dupla deslocada */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-current opacity-10 group-hover:opacity-20 md:transition-opacity md:duration-500" />
              <div className="absolute -top-1.5 -left-1.5 w-full h-full border border-purple-primary opacity-0 group-hover:opacity-20 md:transition-opacity md:duration-500" />

              {/* imagem */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={photo}
                  alt="Thiago Alexandre - Desenvolvedor Front-end"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="100vw"
                  className="object-cover grayscale-[0.3] group-hover:grayscale-0 md:transition-all md:duration-700"
                />
                {/* overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              </div>

              {/* label foto */}
              <span
                className="absolute -bottom-6 right-0 text-[8px] uppercase tracking-[0.3em] opacity-25"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Thiago Alexandre, 2025
              </span>
            </motion.div>
          </div>

          {/* ── SCROLL INDICATOR ── */}
          <motion.div
            variants={fadeUp}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            {/* linha pulsante */}
            <div className="w-[1px] h-10 bg-current opacity-20 animate-pulse" />
            <span
              className="text-[8px] uppercase tracking-[0.35em] opacity-20"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              rolar
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
