"use client";
import { GraduationCap, Languages } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

interface AboutProps {
  title: string;
  education: string;
  language: string;
  description: string;
}

export default function About({ title, education, language, description }: AboutProps) {
  return (
    <section
      id="About"
      className="relative flex flex-col items-center justify-center px-4"
    >
      {/* Título */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="text-4xl font-semibold mb-14 tracking-wide relative"
      >
        {title}
        <span className="block w-16 h-[3px] bg-purple-primary mx-auto mt-3 rounded-full"></span>
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row gap-14 max-w-6xl w-full justify-center relative"
      >
        {/* Formações */}
        <motion.div className="flex flex-col gap-10 w-full md:w-1/3">
          <motion.div
            variants={fadeUp}
            className="
              group
              glass-surface
              transition-all
              flex
              items-center
              rounded-2xl
              p-6
              gap-4
              hover:border-purple-primary/60
              hover:shadow-lg
            "
          >
            <GraduationCap className="text-purple-primary w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium">{education}</span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="
              group
              glass-surface
              transition-all
              flex
              items-center
              rounded-2xl
              p-6
              gap-4
              hover:border-purple-primary/60
              hover:shadow-lg
            "
          >
            <Languages className="text-purple-primary w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium">{language}</span>
          </motion.div>
        </motion.div>

        {/* Linha vertical */}
        <motion.div
          variants={fadeUp}
          className="hidden md:flex items-center justify-center"
        >
          <div className="h-full w-[3px] bg-gradient-to-b from-purple-primary to-purple-400 rounded-full" />
        </motion.div>

        {/* Texto */}
        <motion.div variants={fadeUp} className="md:w-1/2 relative">
          <div className="absolute -top-6 -right-6 w-20 h-20 border border-purple-primary/20 rounded-xl rotate-12"></div>

          <p className="leading-relaxed text-lg tracking-wide opacity-90 relative z-10 whitespace-pre-line">
            {description}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
