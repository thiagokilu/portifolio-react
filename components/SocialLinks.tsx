import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

export function SocialLinks() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/thiagokilu",
      icon: <FaGithub className="text-2xl" />,
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/thiago-alexandre-cavalcante",
      icon: <FaLinkedin className="text-2xl" />,
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/thiagokilu",
      icon: <FaInstagram className="text-2xl" />,
      color: "from-purple-600 to-pink-600",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/thiagokilu",
      icon: <FaYoutube className="text-2xl" />,
      color: "from-red-600 to-red-800",
    },
    {
      name: "Discord",
      url: "https://discord.gg/6pwtQkCt",
      icon: <FaDiscord className="text-2xl" />,
      color: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 lg:-mt-10">
      <section
        id="social"
        className={`
          max-w-4xl w-full bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700
          transform transition-all duration-700 ease-out
          ${show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        <div className="p-8 md:p-12">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-cyan-400">
              CONECTE-SE COMIGO
            </span>
            <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Minhas Redes Sociais
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Me acompanhe nas redes sociais para ficar por dentro dos meus
              projetos, artigos e conteúdo sobre desenvolvimento e tecnologia.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br ${link.color} border border-gray-700 hover:scale-105 transition-transform duration-300 hover:shadow-lg`}
              >
                <div className="text-white mb-2">{link.icon}</div>
                <span className="text-white font-medium">{link.name}</span>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Me mande uma mensagem em qualquer uma dessas plataformas!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
