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

interface LoadingState {
	[key: string]: boolean;
}

export function CardGroup() {
	const [projetos, setProjetos] = useState<Project[]>([]);
	const [imagens, setImagens] = useState<Screenshots>({});
	const [loadingById, setLoadingById] = useState<LoadingState>({});

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
				console.error("Erro ao buscar os projetos da Vercel:", error);
			}
		}
		getVercelProjects();
	}, []);

	useEffect(() => {
		async function getScreenshots() {
			const imagensTemp: Screenshots = {};
			const loadingTemp: LoadingState = {};
			await Promise.all(
				projetos.map(async (proj) => {
					const urlProjeto = `https://${proj.name}-thiagokilus-projects.vercel.app`;
					loadingTemp[proj.id] = true;
					try {
						const res = await fetch(
							`https://api.microlink.io/?url=${urlProjeto}&screenshot=true`,
						);
						const data = await res.json();
						imagensTemp[proj.id] = data.data.screenshot.url;
					} catch (error) {
						console.error("Erro ao buscar a imagem:", error);
					}
				}),
			);
			setImagens(imagensTemp);
			// Marca todas as imagens como carregadas (poderia fazer individual, se quisesse animar ao carregar cada uma)
			const finalLoading = Object.fromEntries(
				Object.keys(imagensTemp).map((id) => [id, false]),
			);
			setLoadingById(finalLoading);
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

					const isLoading = loadingById[proj.id];
					const imgSrc = imagens[proj.id];

					return (
						<Card
							key={proj.id}
							linkProjeto={urlProjeto}
							linkImg={
								isLoading || !imgSrc
									? "https://via.placeholder.com/300"
									: imgSrc
							}
							title={proj.name}
							description="Projeto da Vercel com deploy automático."
							icons={<div className="flex gap-3 text-xl mb-3">{icon}</div>}
						>
							{/* Spinner overlay opcional */}
							{isLoading && (
								<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white/50 backdrop-blur-sm rounded">
									<div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
								</div>
							)}
						</Card>
					);
				})}
			</div>
		</div>
	);
}
