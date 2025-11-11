// src/utils/iconMap.tsx
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
  SiFastify,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

import type { ReactNode } from "react";
import { LuBrain } from "react-icons/lu";

export const iconMap: Record<string, ReactNode> = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <FaJsSquare />,
  javascript: <FaJsSquare />,
  typescript: <SiTypescript />,
  react: <FaReact />,
  vue: <FaVuejs />,
  tailwind: <SiTailwindcss />,
  next: <SiNextdotjs />,
  node: <FaNodeJs />,
  python: <FaPython />,
  git: <FaGitAlt />,
  docker: <FaDocker />,
  express: <SiExpress />,
  postgres: <SiPostgresql />,
  firebase: <IoLogoFirebase />,
  fastify: <SiFastify />,
  ai: <LuBrain />,
};
