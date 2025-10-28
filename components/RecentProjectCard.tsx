// components/ProjectCard.tsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  iconMap: Record<string, React.ReactNode>;
}
export default function RecentProjectCard({
  project,
  iconMap,
}: ProjectCardProps) {
  return (
    <div
      className="bg-gray-700 w-96 h-[480px] flex flex-col justify-between 
             rounded-xl overflow-hidden border border-gray-600 
             hover:border-cyan-400 transition-all duration-300 
             hover:shadow-lg hover:shadow-cyan-500/10"
    >
      <div className="w-full h-full object-scale-down bg-gray-800  hover:scale-105 transition-transform duration-500">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover bg-gray-800  hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-100 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => {
            const lowerTech = tech.toLowerCase();
            return (
              <span
                key={i}
                className="flex items-center gap-1 px-3 py-1 bg-gray-600 rounded-full text-xs text-gray-200"
              >
                {iconMap[lowerTech] && (
                  <span className="text-base">{iconMap[lowerTech]}</span>
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
  );
}
