import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaArrowDown,
  FaGraduationCap,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FcLinux } from "react-icons/fc";

export function About_me() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 ">
      <section
        id="about"
        className="max-w-6xl w-full bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 space-y-8 md:w-1/2 order-2 md:order-1">
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

              <div className="flex flex-row items-center text-xl mt-5 mb-10">
                <FaGraduationCap className="mr-5 text-3xl" />
                <hr className="w-10 mr-5 border-t-2" />
                <h2>Inglês avançado - Centro de línguas</h2>
              </div>
            </div>
            <div className="courses flex gap-4 mt-4 text-2xl lg:text-4xl md:text-4xl flex-wrap text-wrap">
              <a href="#" title="HTML5">
                <FaHtml5 className="text-[#e34f26] " />
              </a>
              <a href="#" title="CSS3">
                <FaCss3Alt className="text-[#1572b6] " />
              </a>
              <a href="#" title="Talwind css">
                <SiTailwindcss className="text-[#00bcff] " />
              </a>
              <a href="#" title="JavaScript">
                <FaJs className="text-[#f7df1e] " />
              </a>
              <a href="#" title="Typescript">
                <SiTypescript className="text-[#3178C6] " />
              </a>
              <a href="#" title="React">
                <FaReact className="text-[#3cdafb] " />
              </a>
              <a href="#" title="Git">
                <FaGitAlt className="text-[#f05032] " />
              </a>
              <a href="#" title="Linux">
                <FcLinux />
              </a>
              <a
                href="https://www.credly.com/badges/b171edcd-9e83-49fe-8beb-708554115286"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/icons/introduction-to-cybersecurity (3).png"
                  alt="Cybersecurity Badge"
                  width={40}
                  height={40}
                />
              </a>
            </div>
            <div>
              <a
                href="/assets/files/curriculo-thiago-portifolio.pdf"
                download="Curriculo-thiago.pdf"
                className=" flex flex-row items-center gap-2 px-6 py-3 mt-5 max-w-40 text-xl font-semibold text-white rounded-md shadow-md bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0"
              >
                Currículo
                <FaArrowDown />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center p-8 md:w-1/2 order-1 md:order-2">
            <div className="relative group">
              <img
                src="/assets/imagens/perfil.png"
                alt="Perfil"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-gray-600 shadow-xl group-hover:border-cyan-400 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
