import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaArrowDown,
  FaGraduationCap,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaVuejs,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { useState, useEffect } from "react";

export function About_me() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen  flex items-center justify-center  px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 lg:-mt-10 overflow-hidden">
      <section
        id="about"
        className={`
    max-w-6xl w-full bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700
    transform transition-all duration-700 ease-out
    ${show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
  `}
      >
        <div className="flex flex-col md:flex-row">
          <div className=" p-8 md:p-12 space-y-8 md:w-1/2 order-2 md:order-1">
            <div>
              <span className="text-sm font-medium text-cyan-400">
                SOBRE MIM
              </span>
              <h1 className="text-4xl font-bold mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Thiago Alexandre
              </h1>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Tenho 21 anos, sou formado em Gestão em Tecnologia da
                Informação. Apaixonado por tecnologia e sempre em busca de novos
                desafios para aprimorar minhas habilidades e contribuir com
                projetos inovadores.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gray-700 p-3 rounded-full mr-4">
                  <FaGraduationCap className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100">Gestão em TI</h3>
                  <p className="text-gray-400 text-sm">
                    Faculdade de tecnologia e inovação - Senac DF
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-700 p-3 rounded-full mr-4">
                  <FaGraduationCap className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100">
                    Inglês Avançado
                  </h3>
                  <p className="text-gray-400 text-sm">Centro de línguas</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-4">
                Habilidades
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="skill-tooltip" title="HTML5">
                  <FaHtml5 className="text-3xl text-[#e34f26] hover:scale-110 transition-transform" />
                </div>
                <div className="skill-tooltip" title="CSS3">
                  <FaCss3Alt className="text-3xl text-[#1572b6] hover:scale-110 transition-transform" />
                </div>
                <div className="skill-tooltip" title="Tailwind CSS">
                  <SiTailwindcss className="text-3xl text-[#00bcff] hover:scale-110 transition-transform" />
                </div>
                <div className="skill-tooltip" title="JavaScript">
                  <FaJs className="text-3xl text-[#f7df1e] hover:scale-110 transition-transform" />
                </div>
                <div className="skill-tooltip" title="TypeScript">
                  <SiTypescript className="text-3xl text-[#3178C6] hover:scale-110 transition-transform" />
                </div>
                <div className="skill-tooltip" title="React">
                  <FaReact className="text-3xl text-[#3cdafb] hover:scale-110 transition-transform" />
                </div>
                <div className="skill-tooltip" title="VueJs">
                  <FaVuejs className="text-3xl text-[#14bb87] hover:scale-110 transition-transform" />
                </div>
                <div className="skill-tooltip" title="Git">
                  <FaGitAlt className="text-3xl text-[#f05032] hover:scale-110 transition-transform" />
                </div>
                <div className="skill-tooltip" title="Linux">
                  <FcLinux className="text-3xl hover:scale-110 transition-transform" />
                </div>
                <div className="skill-tooltip" title="Cybersecurity">
                  <img
                    src="/assets/icons/introduction-to-cybersecurity (3).png"
                    alt="Cybersecurity Badge"
                    className="w-8 h-8 hover:scale-110 transition-transform"
                  />
                </div>
              </div>
            </div>

            <a
              href="/assets/files/curriculo-thiago-portifolio.pdf"
              download="Curriculo-thiago.pdf"
              className="inline-flex items-center px-6 py-3 mt-6 text-white bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
            >
              Baixar Currículo
              <FaArrowDown className="ml-2" />
            </a>
          </div>

          <div className="md:w-1/2 bg-gradient-to-br from-gray-700 to-gray-900 flex flex-col gap-10 items-center justify-center p-8 md:w-1/2 order-1 md:order-2">
            <div className="relative group">
              <img
                src="/assets/imagens/perfil.png"
                alt="Perfil"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-600 shadow-xl group-hover:border-cyan-400 transition-all duration-300"
              />
            </div>
            <div className="flex gap-5">
              <a
                href="https://github.com/thiagokilu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/thiago-alexandre-cavalcante/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
