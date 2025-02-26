import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import Image from "next/image";
import { JSX } from "react";

interface CardProps {
    linkProjeto: string;
    linkImg: string;
    title: string;
    description: string;
    icons: JSX.Element;
  }

export function Card({linkProjeto, linkImg, title, description, icons} : CardProps) {
    return(
        <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <Link href={linkProjeto} target="_blank">
        <div className="overflow-hidden">
          <Image
            src={linkImg}
            alt="Projeto Soundify"
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
            width={300}
            height={300}
          />
        </div>
        <div className="p-6 bg-white">
          <div className="flex justify-between">
          <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
          <div className="flex gap-3 text-xl mb-3">
          {icons} {/* Renderiza os ícones diretamente */}
          </div>
          </div>
          <p className="text-black dark:text-black">
            {description}
          </p>
        </div>
      </Link>
    </div>
    )
}