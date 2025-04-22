import {
	FaHtml5,
	FaCss3Alt,
	FaJsSquare,
	FaNodeJs,
	FaReact,
} from "react-icons/fa";
import { Card } from "./card";
import { BigCard } from "./bigCard";
import { useState, useEffect } from "react";

interface Project {
	id: string;
	name: string;
	img: string;
	framework: string;
	description: string;
	link: string;
}

export function CardGroup() {
	const [projetos, setProjetos] = useState<Project[]>([]);
	const [loading, setLoading] = useState(false);

	const icons = (
		<>
			<FaHtml5 />
			<FaCss3Alt />
			<FaJsSquare />
		</>
	);

	useEffect(() => {
		async function getLocalProjects() {
			setLoading(true);
			try {
				const res = await fetch("./public/assets/files/projetos.json");
				if (!res.ok) {
					throw new Error(`Erro ao carregar projetos.json: ${res.statusText}`);
				}
				const data: Project[] = await res.json();
				setProjetos(data);
			} catch (error) {
				console.error(
					"Erro ao buscar os projetos locais:",
					error instanceof Error ? error.message : "Unknown error",
				);
			} finally {
				setLoading(false);
			}
		}
		getLocalProjects();
	}, []);

	return (
		<div>
			<div className="flex w-full gap-10 mb-10">
				<BigCard
					linkProjeto="https://soundify-five.vercel.app/"
					linkImg="https://res.cloudinary.com/dbwz36bcf/image/upload/v1741477590/Soundify-16-9_p9hk7c.png"
					title="Soundify"
					description="Plataforma de streaming musical com integração de API e player customizado."
					icons={
						<div className="flex gap-3 text-xl mb-3">
							<FaHtml5 />
							<FaCss3Alt />
							<FaJsSquare />
							<FaNodeJs />
						</div>
					}
				/>

				<BigCard
					linkProjeto="https://nature-ecomerce.vercel.app/"
					linkImg="https://res.cloudinary.com/dbwz36bcf/image/upload/v1741477591/nature-ecomerce-16-9_q6tmvd.png"
					title="Nature E-commerce"
					description="Loja virtual focada em produtos sustentáveis e ecológicos."
					icons={
						<div className="flex gap-3 text-xl mb-3">
							<FaHtml5 />
							<FaCss3Alt />
							<FaJsSquare />
						</div>
					}
				/>
			</div>

			<h2 className="text-4xl font-bold text-center mb-16">Outros projetos</h2>

			{loading && (
				<div className="w-full flex justify-center items-center mb-10">
					<div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
				</div>
			)}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8 xs:flex xs:flex-col xs:items-center auto-rows-min">
				{projetos.map((proj) => {
					const framework = proj.framework;
					let icon;
					if (framework === "vite" || framework === "nextjs") {
						icon = <FaReact />;
					} else {
						icon = <div className="flex flex-row gap-2">{icons}</div>;
					}

					return (
						<Card
							key={proj.id}
							linkProjeto={proj.link}
							linkImg={proj.img}
							title={proj.name}
							description={proj.description}
							icons={<div className="flex gap-3 text-xl mb-3">{icon}</div>}
						/>
					);
				})}
			</div>
		</div>
	);
}
