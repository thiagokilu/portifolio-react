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
    href: "",
  },
];

export default function Companies() {
  const loopCompanies = [...companies, ...companies];
  const distance = (CARD_WIDTH + GAP) * companies.length;

  return (
    <section id="Companies" className="px-4 flex flex-col items-center">
      <h2 className="text-4xl font-semibold mb-14 tracking-wide text-center">
        Empresas
      </h2>

      <div className="w-full max-w-6xl overflow-x-hidden overflow-y-visible relative py-4">
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
              className="glass-surface rounded-2xl p-8 min-h-40 w-[280px] shrink-0 flex items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out"
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={company.src}
                alt={`Logo ${company.name}`}
                width={220}
                height={100}
                className="h-auto w-auto max-h-16 object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
