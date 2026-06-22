"use client";
import React, { JSX } from "react";
import Image from "next/image";
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

export default function ProjectCard({ project }: ProjectCardProps) {
  const description = project.description_pt || project.description_en;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full"
      style={{ fontFamily: "var(--font-editorial-serif)" }}
    >
      <article className="flex flex-col gap-0">
        {/* ── IMAGEM ── */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* grayscale que some no hover */}
          <div className="absolute inset-0 md:grayscale md:group-hover:grayscale-0 md:transition-all md:duration-700 ease-in-out z-10" />

          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover md:transition-transform md:duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* ── overlay escuro no hover com call-to-action ── */}
          <div
            className="
            absolute inset-0 z-20
            flex items-end justify-between p-5
            bg-gradient-to-t from-[#2B2A27]/45 via-[#2B2A27]/15 to-transparent
            md:opacity-0 md:group-hover:opacity-100
            md:transition-opacity md:duration-500
          "
          >
            <span
              className="text-[#FDFEFD] text-[10px] font-sans uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-editorial-sans)" }}
            >
              Ver projeto
            </span>
            {/* seta diagonal */}
            <svg
              className="w-5 h-5 text-[#FDFEFD] md:translate-y-1 md:translate-x-1 md:group-hover:translate-y-0 md:group-hover:translate-x-0 md:transition-transform md:duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7v10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* ── CORPO ── */}
        <div className="pt-5 flex flex-col gap-3">
          {/* linha divisória que cresce no hover */}
          <div className="relative h-px bg-current opacity-10 mb-1">
            <div
              className="
              absolute left-0 top-0 h-full w-0 bg-[#bc9b48]
              md:transition-all md:duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              md:group-hover:w-full
            "
            />
          </div>

          {/* título + techs em linha */}
          <div className="flex items-start justify-between gap-3">
            <h3
              className="
                text-xl leading-tight tracking-tight font-normal uppercase
                md:group-hover:text-[#bc9b48] md:transition-colors md:duration-300
              "
              style={{ fontFamily: "var(--font-editorial-serif)" }}
            >
              {project.title}
            </h3>

            {/* ícones das techs — aparecem no hover */}
            <div
              className="
              flex items-center gap-1.5 shrink-0 mt-0.5
              md:opacity-0 md:group-hover:opacity-100
              md:translate-x-2 md:group-hover:translate-x-0
              md:transition-all md:duration-400
            "
            >
              {project.techs.slice(0, 3).map((tech) =>
                techIcons[tech] ? (
                  <span
                    key={tech}
                    className="text-base opacity-60"
                    title={tech}
                  >
                    {techIcons[tech]}
                  </span>
                ) : null,
              )}
              {project.techs.length > 3 && (
                <span
                  className="text-[9px] font-sans opacity-40"
                  style={{ fontFamily: "var(--font-editorial-sans)" }}
                >
                  +{project.techs.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* descrição */}
          <p
            className="
              text-xs leading-relaxed opacity-50
              md:max-h-0 overflow-hidden
              md:group-hover:max-h-24
              md:transition-all md:duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              font-sans
            "
            style={{
              fontFamily: "var(--font-editorial-sans)",
              fontStyle: "italic",
            }}
          >
            {description}
          </p>

          {/* stack em texto — sempre visível, leve */}
          <div
            className="flex flex-wrap gap-x-3 gap-y-1 mt-1"
            style={{ fontFamily: "var(--font-editorial-sans)" }}
          >
            {project.techs.slice(0, 4).map((tech, i) => (
              <span
                key={tech}
                className="text-[9px] uppercase tracking-[0.18em] opacity-30 md:group-hover:opacity-60 md:transition-opacity md:duration-300"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </a>
  );
}
