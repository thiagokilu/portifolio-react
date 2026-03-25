"use client";
import { motion, type Variants } from "framer-motion";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineExpand: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 1.2, ease: [0.65, 0, 0.35, 1] },
  },
};

const services = [
  { category: "Engenharia", title: "Desenvolvimento Web", index: "01" },
  { category: "Estratégia", title: "UI/UX Design", index: "02" },
  { category: "Estética", title: "Design de Interface", index: "03" },
  { category: "Suporte", title: "Soluções em Suporte", index: "04" },
];

export default function EditorialDarkServices() {
  return (
    <section
      id="services"
      className="scroll-mt-24 px-6 md:px-16 lg:px-24 py-16 md:py-20 overflow-hidden"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header Editorial */}
        <motion.header variants={fadeUp} className="mb-24 space-y-4">
          <div className="flex items-center gap-4 overflow-hidden">
            <motion.div
              variants={lineExpand}
              className="h-px w-12 bg-current/30 origin-left"
            />
            <span className="text-[10px] uppercase tracking-[0.5em] opacity-40 font-sans">
              Capacidades
            </span>
          </div>
          <h2
            className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.85]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Práticas <br />
            <span className="italic opacity-40">Criativas</span>
          </h2>
        </motion.header>

        {/* Lista Minimalista */}
        <div className="flex flex-col">
          {services.map((service) => (
            <motion.div
              key={service.index}
              variants={fadeUp}
              className="group relative flex flex-col md:flex-row md:items-end justify-between py-12 border-b border-current/10 hover:border-current/40 transition-colors duration-700"
            >
              <div className="flex flex-col gap-6">
                {/* Meta info */}
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-light opacity-20 tabular-nums uppercase tracking-widest">
                    {service.index}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-sans px-2 py-0.5 border border-current/10 rounded-full">
                    {service.category}
                  </span>
                </div>

                {/* Título com Serif */}
                <h3
                  className="text-3xl md:text-5xl font-semibold tracking-tight group-hover:italic transition-all duration-500 ease-in-out"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Botão Discreto / Indicador */}
              <div className="mt-8 md:mt-0 flex items-center gap-3 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-700">
                <span className="text-[10px] uppercase tracking-widest opacity-50">
                  Detalhes
                </span>
                <div className="w-8 h-px bg-current/50" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rodapé da Seção */}
        <motion.footer variants={fadeUp} className="mt-16 flex justify-end">
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-20">
            © 2026 Innovation Lab
          </p>
        </motion.footer>
      </motion.div>
    </section>
  );
}
