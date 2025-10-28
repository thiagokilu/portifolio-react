import { useState, useEffect } from "react";

import RecentProjects from "./RecentProjects";
import { FaArrowDown } from "react-icons/fa";

export function Projetos({
  setOpenProjects,
}: {
  setOpenProjects: (value: boolean) => void;
}) {
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

          <RecentProjects />

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
