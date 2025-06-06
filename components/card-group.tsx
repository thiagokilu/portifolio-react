import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { Card } from "./card";
import { useState, useEffect } from "react";

interface Project {
  id: string;
  name: string;
  img: string;
  framework: string;
  description: string;
  link: string;
}

export function CardGroup() {
  const [projetos, setProjetos] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  const icons = (
    <>
      <FaHtml5 />
      <FaCss3Alt />
      <FaJsSquare />
    </>
  );

  const reactIcons = (
    <>
      <FaReact />
    </>
  );

  useEffect(() => {
    async function getLocalProjects() {
      setLoading(true);
      try {
        const res = await fetch("/assets/files/projetos.json");
        if (!res.ok) {
          throw new Error(`Erro ao carregar projetos.json: ${res.statusText}`);
        }
        const data: Project[] = await res.json();
        setProjetos(data);
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
        {projetos.map((proj) => {
          return (
            <Card
              key={proj.id}
              linkProjeto={proj.link}
              linkImg={proj.img}
              title={proj.name}
              description={proj.description}
              icons={
                <div className="flex gap-3 text-xl mb-3">
                  {proj.framework === "padrao" ? icons : reactIcons}
                </div>
              }
            />
          );
        })}
      </div>
    </div>
  );
}
