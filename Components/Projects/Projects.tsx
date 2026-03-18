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

export default function Projects() {
  const orderedProjects = [...projects].reverse();

  return <ProjectsClient title="Projetos" projects={orderedProjects} />;
}
