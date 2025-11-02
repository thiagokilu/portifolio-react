import { useState, useEffect } from "react";
import { Card } from "./card";
import { iconMap } from "../src/utils/iconMap";

interface Project {
  id: string;
  title: string;
  img: string;
  techs: string[];
  description: string;
  link: string;
}

export function CardGroup() {
  const [projetos, setProjetos] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getLocalProjects() {
      setLoading(true);
      try {
        const res = await fetch("/assets/files/projetos.json");
        if (!res.ok) {
          throw new Error(`Erro ao carregar projetos.json: ${res.statusText}`);
        }
        const data: Project[] = await res.json();
        // Inverte o array para mostrar os últimos projetos primeiro
        setProjetos(data.reverse());
      } catch (error) {
        console.error(
          "Erro ao buscar os projetos locais:",
          error instanceof Error ? error.message : "Unknown error"
        );
      } finally {
        setLoading(false);
      }
    }
    getLocalProjects();
  }, []);

  return (
    <div className="pb-20">
      <h2
        id="otherProjects"
        className="text-4xl font-bold text-center mb-16 mt-10"
      >
        Outros projetos
      </h2>

      {loading && (
        <div className="w-full flex justify-center items-center mb-10">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {projetos.map((proj) => (
          <Card
            key={proj.id}
            linkProjeto={proj.link}
            linkImg={proj.img}
            title={proj.title}
            description={proj.description}
            icons={
              <div className="flex gap-3 text-xl mb-3">
                {proj.techs?.map((tech) => (
                  <span key={tech} title={tech}>
                    {iconMap[tech.toLowerCase()] ?? null}
                  </span>
                ))}
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
