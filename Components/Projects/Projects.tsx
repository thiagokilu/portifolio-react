import ProjectsClient from "./ProjectsClient";
import projects from "@/public/files/projetos.json";

export interface Project {
  id: number;
  title: string;
  description_pt: string;
  description_en: string;
  img: string;
  link?: string;
  techs: string[];
}

interface ProjectsProps {
  title: string;
}

export default function Projects({ title }: ProjectsProps) {
  const orderedProjects = [...projects].reverse();

  return <ProjectsClient title={title} projects={orderedProjects} />;
}
