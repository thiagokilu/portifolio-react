import { useState, useEffect } from "react";
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
import { SiTypescript, SiTailwindcss, SiFirebase } from "react-icons/si";
import { GiPineapple } from "react-icons/gi";

const iconMap: Record<string, JSX.Element> = {
  html5: <FaHtml5 />,
  css3: <FaCss3Alt />,
  javascript: <FaJsSquare />,
  typescript: <SiTypescript />,
  react: <FaReact />,
  vue: <FaVuejs />,
  pinia: <GiPineapple />,
  tailwind: <SiTailwindcss />,
  firebase: <SiFirebase />,
  "node.js": <FaNodeJs />,
};

export function Projetos({
  setOpenProjects,
}: {
  setOpenProjects: (value: boolean) => void;
}) {
  const projects = [
    {
      title: "Soundify",
      description:
        "Plataforma de e-commerce completa com carrinho de compras, autenticação e pagamentos.",
      technologies: ["Html5", "Css3", "Javascript", "Node.js"],
      githubLink: "https://github.com/thiagokilu/soundify",
      liveLink: "https://soundify-five.vercel.app/",
      image:
        "https://res.cloudinary.com/dbwz36bcf/image/upload/v1741477590/Soundify-16-9_p9hk7c.png",
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

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 pb-20">
      <section
        id="projects"
        className={`max-w-6xl w-full bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700 pb-2 transform transition-all duration-700 ease-out
    ${show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
  `}
      >
        <div className="p-2">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Projetos Recentes
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Aqui estão alguns dos meus projetos mais recentes. Cada um foi
              construído com tecnologias modernas e boas práticas de
              desenvolvimento.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 items-center justify-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-700 w-96 rounded-xl overflow-hidden border border-gray-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => {
                      const lowerTech = tech.toLowerCase();
                      return (
                        <span
                          key={techIndex}
                          className="flex items-center gap-1 px-3 py-1 bg-gray-600 rounded-full text-xs text-gray-200"
                        >
                          {iconMap[lowerTech] && (
                            <span className="text-base">
                              {iconMap[lowerTech]}
                            </span>
                          )}
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex justify-between">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <FaGithub className="mr-2" />
                      Código
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 text-center">
            <a
              onClick={() => setOpenProjects(true)}
              href="#otherProjects"
              className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
            >
              Ver todos os projetos
              <FaArrowDown className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
