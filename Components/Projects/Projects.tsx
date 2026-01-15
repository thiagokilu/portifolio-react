import { headers } from "next/headers";
import ProjectsClient from "./ProjectsClient";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface ProjectsProps {
  title: string;
}

export default async function Projects({ title }: ProjectsProps) {
  // headers() é async
  const headersList = await headers();
  const host = headersList.get("host");

  if (!host) {
    throw new Error("Host não encontrado nos headers");
  }

  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/files/projetos.json`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Erro ao carregar projetos");
  }

  const projects: Project[] = await res.json();

  const orderedProjects = [...projects].reverse();

  return <ProjectsClient title={title} projects={orderedProjects} />;
}
