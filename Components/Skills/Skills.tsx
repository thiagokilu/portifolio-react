"use client";
import { motion, type Variants } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiVuedotjs,
} from "react-icons/si";

export default function Skills() {
  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="Skills"
      className="flex flex-col items-center justify-centerx w-full  px-6 text-center"
    >
      {/* Título */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Minhas <span className="text-purple-primary">Skills</span>
      </h2>

      {/* Subtítulo / descrição */}
      <p className="text-gray-400 max-w-2xl mb-12 text-lg">
        Tecnologias que utilizo no meu dia a dia para desenvolver interfaces
        modernas, rápidas e eficientes.
      </p>

      {/* Ícones */}
      <section className="flex items-center justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.5, // só anima quando metade está visível
            margin: "-50px",
          }}
          className="flex flex-wrap w-full items-center justify-center gap-6 text-6xl"
        >
          {[
            <FaHtml5 className="text-white bg-orange-500 rounded-lg p-3 " />,
            <FaCss3Alt className="text-white bg-blue-500 rounded-lg p-3 " />,
            <FaJs className="text-white bg-yellow-500 rounded-lg p-3 " />,
            <SiTypescript className="text-white bg-blue-600 rounded-lg p-3 " />,
            <SiVuedotjs className="text-white bg-green-500 rounded-lg p-3 " />,
            <FaReact className="text-white bg-cyan-500 rounded-lg p-3 " />,
            <SiNextdotjs className="text-white bg-black rounded-lg p-3 dark:bg-white dark:text-black " />,
            <SiTailwindcss className="text-white bg-blue-400 rounded-lg p-3 " />,
            <SiSass className="text-white bg-pink-500 rounded-lg p-3 " />,
            <FaGitAlt className="text-white bg-orange-600 rounded-lg p-3 " />,
            <FaLinux className="text-white bg-yellow-600 rounded-lg p-3 " />,
            // continue com os outros ícones...
          ].map((Icon, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.15, y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {Icon}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </section>
  );
}
