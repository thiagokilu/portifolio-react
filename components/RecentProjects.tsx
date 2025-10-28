import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowDown,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { GiPineapple } from "react-icons/gi";

import { IoLogoFirebase } from "react-icons/io5";
import RecentProjectCard from "./RecentProjectCard";
const iconMap: Record<string, ReactNode> = {
  html5: <FaHtml5 />,
  css3: <FaCss3Alt />,
  javascript: <FaJsSquare />,
  typescript: <SiTypescript />,
  react: <FaReact />,
  vue: <FaVuejs />,
  pinia: <GiPineapple />,
  tailwind: <SiTailwindcss />,
  firebase: <IoLogoFirebase />,
  node: <FaNodeJs />,
};

export default function RecentProjects() {
  const projects = [
    {
      title: "Nexa System",
      description:
        "Sistema para gerenciamento de tickets e chamados de suporte.",
      technologies: [
        "next",
        "firebase",
        "node",
        "express",
        "docker",
        "postgres",
      ],
      githubLink: "https://github.com/thiagokilu/Nexa-system",
      liveLink: "https://nexa-system.vercel.app/",
      image:
        "https://res.cloudinary.com/ds4ptms7d/image/upload/v1761670908/Captura_de_tela_de_2025-10-28_14-00-03_bb7psc.png",
    },
    {
      title: "Food Delivery",
      description:
        "Food App é uma aplicação simples e responsiva para pedidos de comida, com foco em usabilidade.",
      technologies: ["Vue", "Typescript", "Pinia", "Tailwind"],
      githubLink: "https://github.com/thiagokilu/",
      liveLink: "https://delivery-app-ddvs.vercel.app/",
      image:
        "https://res.cloudinary.com/ds4ptms7d/image/upload/v1752532466/Captura_de_tela_de_2025-07-14_19-30-31_pj93kg.png",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-5 items-center justify-center">
      {" "}
      {projects.map((project, index) => (
        <RecentProjectCard key={index} project={project} iconMap={iconMap} />
      ))}
    </div>
  );
}
