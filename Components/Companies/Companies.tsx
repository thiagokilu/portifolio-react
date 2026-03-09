"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CARD_WIDTH = 280;
const GAP = 32;

const companies = [
  {
    name: "astroxz",
    src: "/companies/logo-odfc-DDM-7RsY.png",
    href: "https://astroxzdesigner.com.br/",
  },
  {
    name: "Stratek",
    src: "/companies/Logo-Stratek.png",
    href: "https://www.assessoriastratek.com.br/",
  },
  {
    name: "Plarte",
    src: "/companies/plarte.png",
    href: "https://embreve-mu.vercel.app/",
  },
];

export default function Companies() {
  const loopCompanies = [...companies, ...companies, ...companies];
  const distance = (CARD_WIDTH + GAP) * companies.length;

  return (
    <section id="Companies" className="w-full flex flex-col items-center">
      <h2 className="text-4xl font-semibold tracking-wide text-center">
        Empresas
      </h2>
      <div className="w-full overflow-x-hidden overflow-y-visible relative py-4 px-4 md:px-6">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: [0, -distance] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          {loopCompanies.map((company, index) => (
            <a
              key={`${company.name}-${index}`}
              className="group glass-surface rounded-2xl p-8 min-h-40 w-[280px] shrink-0 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer relative"
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar site da empresa ${company.name}`}
            >
              <Image
                src={company.src}
                alt={`Logo ${company.name}`}
                width={220}
                height={100}
                className="h-auto w-auto max-h-16 object-contain"
                loading="lazy"
              />
              <span className="absolute bottom-3 right-4 text-xs font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Clique para abrir
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
