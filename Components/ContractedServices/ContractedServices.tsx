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

interface ContractedServicesProps {
  title: string;
  titleHighlight: string;
  webDevelopmentTitle: string;
  webDevelopmentDesc: string;
  uiuxTitle: string;
  uiuxDesc: string;
  interfaceDesignTitle: string;
  interfaceDesignDesc: string;
  maintenanceTitle: string;
  maintenanceDesc: string;
}

export default function ContractedServices({
  title,
  titleHighlight,
  webDevelopmentTitle,
  webDevelopmentDesc,
  uiuxTitle,
  uiuxDesc,
  interfaceDesignTitle,
  interfaceDesignDesc,
  maintenanceTitle,
  maintenanceDesc,
}: ContractedServicesProps) {
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
        {title} <span className="text-purple-primary">{titleHighlight}</span>
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
            title: webDevelopmentTitle,
            desc: webDevelopmentDesc,
          },
          {
            icon: MonitorCheck,
            title: uiuxTitle,
            desc: uiuxDesc,
          },
          {
            icon: PenTool,
            title: interfaceDesignTitle,
            desc: interfaceDesignDesc,
          },
          {
            icon: Wrench,
            title: maintenanceTitle,
            desc: maintenanceDesc,
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
