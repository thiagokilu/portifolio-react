import { JSX } from "react";

interface CardProps {
  linkProjeto: string;
  linkImg: string;
  title: string;
  description: string;
  icons: JSX.Element;
}

export function Card({
  linkProjeto,
  linkImg,
  title,
  description,
  icons,
}: CardProps) {
  return (
    <div
      className="dark:bg-gray-800 border-2 border-gray-700
  group relative w-[400px] max-h-[400px] rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
    >
      <a href={linkProjeto} target="_blank" rel="noopener noreferrer">
        <div className="overflow-hidden aspect-video bg-gray-900">
          <img
            src={linkImg}
            alt={title}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </a>

      {/* conteúdo fora do link */}
      <div className="p-6 flex flex-col items-start text-white">
        <div className="flex justify-between w-full">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex gap-3 text-xl mb-3">{icons}</div>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}
