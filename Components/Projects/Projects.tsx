"use client";

import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { motion, type Variants } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/files/projetos.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Projetos carregados:", data); // <-- log certo
        setProjects(data);
      })
      .catch((err) => console.error("Erro ao carregar projetos:", err));
  }, []);

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="Projects"
      className="flex flex-col items-center justify-center px-4"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col max-w-32 mb-10"
      >
        <h2 className="text-4xl font-semibold text-white">Projetos</h2>
        <div className="w-full flex items-center justify-center">
          <span className="block w-16 h-[3px] bg-purple-primary mt-3 rounded-full"></span>
        </div>
      </motion.div>

      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-10 
          max-w-6xl 
          w-full
        "
      >
        {projects
          .slice()
          .reverse()
          .map((project: any) => (
            <motion.div
              key={project.id}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
      </div>
    </section>
  );
}
