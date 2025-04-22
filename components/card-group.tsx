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
	framework: string;
}

interface Screenshots {
	[key: string]: string;
}

export function CardGroup() {
	const [projetos, setProjetos] = useState<Project[]>([]);
	const [imagens, setImagens] = useState<Screenshots>({});
	const [loandigImg, setLoadingImg] = useState(false);

	const icons = (
		<>
			<FaHtml5 />
			<FaCss3Alt />
			<FaJsSquare />
		</>
	);

	useEffect(() => {
		async function getVercelProjects() {
			try {
				const res = await fetch("https://api.vercel.com/v9/projects", {
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_VERCEL_API_KEY}`,
					},
				});
				if (!res.ok) {
					throw new Error(`Erro na API: ${res.status} ${res.statusText}`);
				}
				const data = await res.json();
				setProjetos(data.projects);
			} catch (error) {
				console.error(
					"Ocorreu um erro ao buscar os projetos da Vercel:",
					error instanceof Error ? error.message : "Unknown error",
				);
			}
		}
		getVercelProjects();
	}, []);

	useEffect(() => {
		async function getScreenshots() {
			setLoadingImg(true);
			const imagensTemp: Screenshots = {};
			await Promise.all(
				projetos.map(async (proj) => {
					const urlProjeto = `https://${proj.name}-thiagokilus-projects.vercel.app`;
					try {
						const res = await fetch(
							`https://api.microlink.io/?url=${urlProjeto}&screenshot=true`,
						);
						const data = await res.json();

						// Verificação mais robusta
						if (data && data.data && data.data.screenshot) {
							imagensTemp[proj.id] = data.data.screenshot.url;
						} else {
							// Fallback para imagem padrão
							imagensTemp[proj.id] = "https://via.placeholder.com/300";
							console.log(`Dados incompletos para ${proj.name}:`, data);
						}
					} catch (error) {
						console.error("Erro ao buscar a imagem:", error);
						// Adicione também um fallback aqui
						imagensTemp[proj.id] = "https://via.placeholder.com/300";
					}
				}),
			);
			setImagens(imagensTemp);
			setLoadingImg(false);
		}
		if (projetos.length > 0) getScreenshots();
	}, [projetos]);

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
			{loandigImg && (
				<div className="w-full flex justify-center items-center mb-10">
					<div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
				</div>
			)}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8 xs:flex xs:flex-col xs:items-center auto-rows-min">
				{projetos.map((proj) => {
					const urlProjeto = `https://${proj.name}-thiagokilus-projects.vercel.app`;
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
							linkProjeto={urlProjeto}
							linkImg={imagens[proj.id] || "https://via.placeholder.com/300"}
							title={proj.name}
							description="Projeto da Vercel com deploy automático."
							icons={<div className="flex gap-3 text-xl mb-3">{icon}</div>}
						/>
					);
				})}
			</div>
		</div>
	);
}
