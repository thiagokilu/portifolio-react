import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className=" text-white px-6 py-5">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-20  pt-10">
        {/* Menu links */}
        <div className="flex flex-col md:flex-row gap-10 border-b md:border-b-0 md:border-r border-amber-50 pb-6 md:pb-0 md:pr-10 w-full md:w-auto">
          <ul className="flex flex-col gap-2 text-center md:text-left">
            <li className="hover:text-hover cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-hover cursor-pointer">
              <a href="#page__title">Projetos</a>
            </li>
            <li className="hover:text-hover cursor-pointer">
              <a href="#contact__title">Contato</a>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Redes Sociais
          </h2>
          <div className="text-2xl flex justify-center md:justify-start gap-5">
            <a
              href="https://github.com/thiagokilu"
              aria-label="github"
              className="hover:text-hover transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/thiago-alexandre-cavalcante/"
              aria-label="Likedin"
              className="hover:text-hover transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/thiagokilu/"
              aria-label="Instagram"
              className="hover:text-hover transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-hover transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="hover:text-hover transition"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@thiagokilu"
              aria-label="YouTube"
              className="hover:text-hover transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-400 mt-10">
        © 2025 Thiago Alexandre. Todos os direitos reservados.
      </p>
    </footer>
  );
}
