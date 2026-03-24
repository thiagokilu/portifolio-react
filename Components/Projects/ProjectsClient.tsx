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
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectsClient({
  title,
  projects,
}: ProjectsClientProps) {
  return (
    <section
      id="projects"
      className="relative w-full px-6 md:px-12 lg:px-20 py-12 md:py-16"
      style={{ fontFamily: "var(--font-editorial-serif)" }}
    >
      {/* ── FUNDO TIPOGRÁFICO DECORATIVO ── */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-8 right-4 text-[clamp(6rem,18vw,14rem)] font-black leading-none tracking-tighter opacity-[0.04] text-current"
      >
        WORK
      </span>

      {/* ── CABEÇALHO EDITORIAL ── */}
      <motion.header
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        {/* linha + issue label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-current opacity-20" />
          <span
            className="text-[10px] uppercase tracking-[0.25em] opacity-50 font-sans"
            style={{
              fontFamily: "var(--font-editorial-sans)",
              letterSpacing: "0.25em",
            }}
          >
            Selected Projects
          </span>
        </div>

        {/* título principal */}
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
          <h2
            className="text-[clamp(1.8rem,10vw,4rem)] font-semibold leading-[1.3] tracking-tight w-full break-words hyphens-auto"
            style={{ fontFamily: "var(--font-editorial-serif)" }}
          >
            {title}
          </h2>
          {/* contagem editorial */}
          <span
            className="self-end sm:self-baseline text-sm opacity-40 font-sans tabular-nums mb-1"
            style={{ fontFamily: "var(--font-editorial-sans)" }}
          >
            {String(projects.length).padStart(2, "0")} projetos
          </span>
        </div>

        {/* subtítulo decorativo */}
        <p
          className="mt-4 text-sm opacity-40 max-w-xs font-sans italic"
          style={{ fontFamily: "var(--font-editorial-sans)" }}
        >
          Uma seleção cuidadosa de trabalhos — design, código & craft.
        </p>
      </motion.header>

      {/* ── GRID EDITORIAL ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-0 max-w-7xl items-center mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="group relative border-t border-current border-opacity-15 pt-6 pb-10"
          >
            {/* número de índice */}
            <span
              className="block text-[10px] tabular-nums opacity-30 mb-4 font-sans tracking-widest"
              style={{ fontFamily: "var(--font-editorial-sans)" }}
            >
              {String(index + 1).padStart(2, "0")} /
            </span>

            {/* card */}
            <ProjectCard project={project} />

            {/* linha animada no hover */}
            <span
              className="
                absolute bottom-0 left-0 h-px w-0 bg-purple-primary
                transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:w-full
              "
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
