import ProjectsClient from "./ProjectsClient";

export const dynamic = "force-dynamic";

export interface Project {
  id: number;
  title: string;
  description_pt: string;
  description_en: string;
  img: string;
  link?: string;
  techs: string[];
}

const PROJECTS_URL =
  "https://raw.githubusercontent.com/thiagokilu/api-projetos/main/projetos.json";

export default async function Projects() {
  try {
    const res = await fetch(PROJECTS_URL, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Falha ao carregar projetos: ${res.status}`);
    }

    const data = await res.json();
    const projects = Array.isArray(data) ? (data as Project[]) : [];
    const orderedProjects = [...projects].reverse();

    return <ProjectsClient title="Projetos" projects={orderedProjects} />;
  } catch (error) {
    console.error("Erro ao carregar projetos:", error);
    return <ProjectsClient title="Projetos" projects={[]} />;
  }
}
