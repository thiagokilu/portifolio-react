import React, { JSX } from "react";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaBrain,
  FaHtml5,
  FaCss3,
  FaJs,
} from "react-icons/fa";
import { GiPineapple } from "react-icons/gi";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiFastify,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import { TbBrandFirebase } from "react-icons/tb";

export const techIcons: Record<string, JSX.Element> = {
  Html: <FaHtml5 />,
  Css: <FaCss3 />,
  Javascript: <FaJs />,
  React: <FaReact />,
  Vue: <FaVuejs />,
  Node: <FaNodeJs />,
  Python: <FaPython />,
  Typescript: <SiTypescript />,
  Tailwind: <SiTailwindcss />,
  Next: <RiNextjsLine />,
  Express: <SiExpress />,
  Fastify: <SiFastify />,
  Pinia: <GiPineapple />,
  Postgres: <SiPostgresql />,
  Docker: <SiDocker />,
  Firebase: <TbBrandFirebase />,
  Ai: <FaBrain />,
};

export default function ProjectCard({ project }: any) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <div
        className="
          group
          glass-surface
          transition-all
          rounded-2xl
          p-5
          flex
          flex-col
          gap-5
          w-full
          max-w-sm
          hover:scale-[1.02]
          hover:border-purple-primary/60
          hover:shadow-lg
        "
      >
        {/* Imagem */}
        <div className="w-full aspect-video overflow-hidden rounded-xl">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-3">
          {/* Título + Tecnologias */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold tracking-wide">
              {project.title}
            </h3>

            <div className="flex flex-row flex-wrap gap-2">
              {project.techs.map((tech: string) => (
                <span
                  key={tech}
                  className="
                    px-3 py-1
                    flex items-center gap-1
                    text-sm
                    rounded-lg
                    bg-purple-primary/15
                    text-purple-primary
                    border border-purple-primary/30
                  "
                >
                  {techIcons[tech] && (
                    <span className="text-lg">{techIcons[tech]}</span>
                  )}
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Descrição */}
          <p className="text-sm leading-relaxed opacity-80">
            {project.description}
          </p>
        </div>
      </div>
    </a>
  );
}
