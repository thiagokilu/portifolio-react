import ProjectsClient from "./ProjectsClient";

export interface Project {
  id: number;
  title: string;
  description_pt: string;
  description_en: string;
  img: string;
  link?: string;
  techs: string[];
}

export default async function Projects() {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/thiagokilu/api-projetos/main/projetos.json",
      { next: { revalidate: 3600 } },
    );
    const projects: Project[] = await res.json();
    const orderedProjects = [...projects].reverse();

    return <ProjectsClient title="Projetos" projects={orderedProjects} />;
  } catch (error) {
    console.error("Erro ao carregar projetos:", error);
    return <ProjectsClient title="Projetos" projects={[]} />;
  }
}
