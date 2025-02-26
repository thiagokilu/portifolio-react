import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="flex flex-row justify-between items-center fixed bottom-0 w-full py-2 px-7 z-[1000] shadow-md">
      <div className="text-sm">© Thiago Alexandre 2025 | Front-end Developer</div>

      <div className="flex flex-row gap-4">
        <a href="https://github.com/thiagokilu" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="text-gray-800 hover:text-gray-500" />
        </a>
        <a href="https://br.linkedin.com/in/thiago-alexandre-cavalcante" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="text-gray-800 hover:text-gray-500" />
        </a>
        <a href="https://www.instagram.com/thiagokilu/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} className="text-gray-800 hover:text-gray-500" />
        </a>
        <a href="https://www.youtube.com/@thiagokilu" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} className="text-gray-800 hover:text-gray-500" />
        </a>
      </div>
    </footer>
    )
}