"use client";

import React, { JSX } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

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

/* =========================
   TIPOS
========================= */

export interface Project {
  id: string | number;
  title: string;
  description_pt: string;
  description_en: string;
  img: string;
  link?: string;
  techs: string[];
}

interface ProjectCardProps {
  project: Project;
}

/* =========================
   ÍCONES DE TECNOLOGIA
========================= */

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

/* =========================
   COMPONENTE
========================= */

export default function ProjectCard({ project }: ProjectCardProps) {
  const locale = useLocale();

  const description = locale.startsWith("pt")
    ? project.description_pt ?? project.description_en
    : project.description_en ?? project.description_pt;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
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
        {/* IMAGEM */}
        <div className="w-full aspect-video overflow-hidden rounded-xl relative">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            quality={80}
          />
        </div>

        {/* CONTEÚDO */}
        <div className="flex flex-col gap-3">
          {/* TÍTULO */}
          <h3 className="text-xl font-semibold tracking-wide">
            {project.title}
          </h3>

          {/* TECNOLOGIAS */}
          <div className="flex flex-row flex-wrap gap-2">
            {project.techs.map((tech) => (
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

          {/* DESCRIÇÃO */}
          <p className="text-sm leading-relaxed opacity-80">{description}</p>
        </div>
      </div>
    </a>
  );
}
