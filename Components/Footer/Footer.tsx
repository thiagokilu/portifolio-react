"use client";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="relative w-full px-6 md:px-16 lg:px-24 py-16 md:py-20 overflow-hidden"
      style={{ fontFamily: "var(--font-editorial-serif)" }}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="relative max-w-6xl mx-auto flex flex-col gap-12"
      >
        {/* ── CONTEÚDO PRINCIPAL ── */}
        <motion.div variants={fadeUp} className="flex flex-col items-center text-center gap-8">
          {/* Linha separadora */}
          <div className="w-full max-w-4xl h-px bg-current opacity-10" />
          
          {/* Copyright */}
          <div className="flex flex-col items-center gap-4">
            <span
              className="text-[9px] uppercase tracking-[0.4em] opacity-35"
              style={{ fontFamily: "var(--font-editorial-sans)" }}
            >
              © {currentYear} Thiago Dev. Todos os direitos reservados.
            </span>
            
            <span
              className="text-[10px] italic opacity-25 max-w-md"
              style={{ fontFamily: "var(--font-editorial-sans)" }}
            >
              Desenvolvido com paixão por criar experiências digitais excepcionais.
            </span>
          </div>

          {/* Linha final */}
          <div className="w-full max-w-2xl h-px bg-current opacity-5" />
        </motion.div>
      </motion.div>
    </footer>
  );
}
