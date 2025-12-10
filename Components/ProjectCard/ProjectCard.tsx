import React, { JSX } from "react";
import { BiLogoTypescript } from "react-icons/bi";
// icons.ts
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
  SiNextdotjs,
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
        className="group bg-white/5 backdrop-blur-md border border-white/10 
                 hover:border-purple-primary/60 hover:shadow-purple-primary/30 
                 shadow-[0_0_20px_-5px_rgba(0,0,0,0.4)]
                 transition-all rounded-2xl p-5 flex flex-col gap-5 w-full max-w-sm"
      >
        {/* Imagem */}
        <div className="w-full aspect-video overflow-hidden rounded-xl">
          <img
            src={project.img}
            alt="Projeto"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-3">
          {/* Título + Tecnologias */}
          <div className="flex flex-col gap-1">
            <h3 className="text-white text-xl font-semibold tracking-wide">
              {project.title}
            </h3>

            <div className="flex flex-row flex-wrap gap-2">
              {project.techs.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 flex items-center gap-1 text-sm 
               bg-purple-primary/20 text-purple-primary rounded-lg 
               border border-purple-primary/30"
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
          <p className="text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </a>
  );
}
