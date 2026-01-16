"use client";

import { motion, Variants } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";

interface Project {
  id: number;
  title: string;
  description_pt: string;
  description_en: string;
  img: string;
  link?: string;
  techs: string[];
}

interface ProjectsClientProps {
  title: string;
  projects: Project[];
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function ProjectsClient({
  title,
  projects,
}: ProjectsClientProps) {
  return (
    <section id="Projects" className="flex flex-col items-center px-4">
      {/* TÍTULO */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-10"
      >
        <h2 className="text-4xl font-semibold">{title}</h2>
        <span className="block w-16 h-[3px] bg-purple-primary mt-3 rounded-full" />
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
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
        {projects.map((project) => (
          <motion.div key={project.id} variants={cardVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
