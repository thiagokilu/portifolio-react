"use client";
import { GraduationCap, Languages } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const credentials = [
  {
    icon: GraduationCap,
    label: "Graduação em Gestão em Tecnologia da Informação",
  },
  {
    icon: Languages,
    label: "Português (Nativo) / Inglês (Intermediário)",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full scroll-mt-24 px-6 md:px-12 lg:px-20 py-16 md:py-20"
      style={{ fontFamily: "var(--font-editorial-serif)" }}
    >
      {/* ── PALAVRA DECORATIVA DE FUNDO ── */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-4 left-0 text-[clamp(5rem,16vw,13rem)] font-black leading-none tracking-tighter opacity-[0.04] text-current"
      >
        ABOUT
      </span>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-7xl w-full mx-auto flex flex-col gap-12"
      >
        {/* ── CABEÇALHO EDITORIAL ── */}
        <motion.header variants={fadeUp}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-current opacity-20" />
            <span
              className="text-[10px] uppercase tracking-[0.25em] opacity-50"
              style={{ fontFamily: "var(--font-editorial-sans)" }}
            >
              Perfil
            </span>
          </div>
          <h2 className="text-[clamp(2.8rem,7vw,6rem)] font-normal leading-[0.95] tracking-tight">
            Sobre
          </h2>
        </motion.header>

        {/* ── CORPO: TEXTO + CREDENCIAIS ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_auto] gap-10 md:gap-16 items-start">
          {/* TEXTO PRINCIPAL */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <div className="flex items-start gap-3 max-w-prose">
              {/* drop cap como elemento separado */}
              <span
                className="shrink-0 text-[clamp(2rem,12vw,3.5rem)] font-semibold leading-none mt-1"
                style={{
                  fontFamily: "var(--font-editorial-serif)",
                  lineHeight: 1,
                }}
              >
                D
              </span>
              <p
                className="text-lg md:text-xl leading-relaxed opacity-80 pt-1"
                style={{
                  fontFamily: "var(--font-editorial-sans)",
                  fontStyle: "italic",
                }}
              >
                esenvolvedor Front-end apaixonado por criar interfaces
                intuitivas e performáticas, com foco em experiência do usuário e
                código limpo.
              </p>
            </div>

            {/* linha separadora */}
            <div className="h-px bg-current opacity-10 w-24" />

            {/* assinatura */}
            <span
              className="text-[10px] uppercase tracking-[0.2em] opacity-30"
              style={{ fontFamily: "var(--font-editorial-sans)" }}
            >
              Desenvolvedor Front-end
            </span>
          </motion.div>

          {/* DIVISÓRIA VERTICAL */}
          <motion.div
            variants={fadeUp}
            className="hidden md:block h-full w-px bg-current opacity-10 self-stretch"
          />

          {/* CREDENCIAIS */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col gap-0 md:w-72"
          >
            {credentials.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group flex items-start gap-5 py-6 border-b border-current border-opacity-10 last:border-b-0"
              >
                <div className="shrink-0 mt-0.5">
                  <Icon
                    className="w-5 h-5 text-purple-primary opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    className="text-[10px] uppercase tracking-[0.18em] opacity-30"
                    style={{ fontFamily: "var(--font-editorial-sans)" }}
                  >
                    {i === 0 ? "Formação" : "Idiomas"}
                  </span>
                  <span
                    className="text-sm leading-snug opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: "var(--font-editorial-sans)" }}
                  >
                    {label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
