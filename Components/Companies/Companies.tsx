"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const CARD_WIDTH = 220;
const GAP = 48;
const LOOP_COUNT = 4;

const companies = [
  {
    name: "astroxz",
    src: "/companies/astroxz-designer.svg",
    href: "https://astroxzdesigner.com.br/",
  },
  {
    name: "Stratek",
    src: "/companies/logo-stratek.svg",
    href: "https://www.assessoriastratek.com.br/",
  },
  {
    name: "Plarte",
    src: "/companies/plarte.svg",
    href: "https://embreve-mu.vercel.app/",
  },
];

export default function Companies() {
  const loopCompanies = Array(LOOP_COUNT).fill(companies).flat();
  const distance = (CARD_WIDTH + GAP) * companies.length;

  return (
    <section
      id="Companies"
      className="relative w-full px-6 md:px-16 lg:px-24 py-16 md:py-20 overflow-hidden"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* ── CABEÇALHO ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto mb-10"
      >
        <div className="flex items-center gap-6 mb-5">
          <span
            className="text-[9px] uppercase tracking-[0.4em] opacity-35"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Clientes & Parceiros
          </span>
          <div className="h-px flex-1 bg-current opacity-15" />
          <span
            className="text-[9px] opacity-20 tabular-nums"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {String(companies.length).padStart(2, "0")}
          </span>
        </div>

        <h2 className="text-[clamp(1.8rem,10vw,4rem)] font-semibold leading-[1.3] tracking-[-0.02em] w-full break-words hyphens-auto">
          Empresas
        </h2>
      </motion.div>

      {/* ── TICKER ── */}
      {/* fade lateral */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[var(--background,white)] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[var(--background,white)] to-transparent" />

        <div className="overflow-x-hidden py-2">
          <motion.div
            className="flex w-max"
            style={{ gap: GAP }}
            animate={{ x: [0, -distance] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {loopCompanies.map((company, index) => (
              <a
                key={`${company.name}-${index}`}
                href={company.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${company.name}`}
                className="group relative shrink-0 flex flex-col items-center justify-center gap-3"
                style={{ width: CARD_WIDTH }}
              >
                {/* linha topo — cresce no hover */}
                <div className="absolute top-0 left-0 h-[1px] w-0 bg-purple-primary group-hover:w-full transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]" />

                {/* imagem */}
                <div className="w-full flex items-center justify-center py-6 px-4 border border-current border-opacity-10 group-hover:border-opacity-25 transition-all duration-500">
                  <Image
                    src={company.src}
                    alt={`Logo ${company.name}`}
                    width={180}
                    height={80}
                    className="h-auto w-auto max-h-12 object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
                    loading="lazy"
                    style={{
                      filter: 'var(--theme-filter)',
                    }}
                  />
                </div>

                {/* nome + seta */}
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className="text-[9px] uppercase tracking-[0.25em] opacity-50"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {company.name}
                  </span>
                  <svg
                    className="w-3 h-3 opacity-40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7v10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
