"use client";
import { Code2, MonitorCheck, PenTool, Wrench } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ContractedServices() {
  return (
    <section
      id="Services"
      className="flex flex-col items-center justify-center px-4"
    >
      <motion.h2
        variants={card}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl font-semibold mb-14 tracking-wide"
      >
        Serviços <span className="text-purple-primary">Contratáveis</span>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full"
      >
        {/* Card */}
        {[
          {
            icon: Code2,
            title: "Desenvolvimento Web",
            desc: "Criação de aplicações modernas, rápidas, responsivas e bem estruturadas.",
          },
          {
            icon: MonitorCheck,
            title: "Melhorias de UI/UX",
            desc: "Otimização visual e de usabilidade para uma experiência mais fluida e intuitiva.",
          },
          {
            icon: PenTool,
            title: "Design de Interfaces",
            desc: "Criação de layouts modernos, identidade visual e componentes personalizados.",
          },
          {
            icon: Wrench,
            title: "Manutenção de Sistemas",
            desc: "Atualizações, correções, melhorias de performance e suporte técnico.",
          },
        ].map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={card}
            className="
              group
              glass-surface
              p-6
              rounded-2xl
              transition-all
              hover:scale-105
              hover:border-purple-primary/50
            "
          >
            <Icon className="text-purple-primary w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm leading-relaxed opacity-80">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
