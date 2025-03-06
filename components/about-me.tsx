import Image from "next/image";
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import cyberBaget from "../assets/icons/introduction-to-cybersecurity (3).png";
import perfilPicutre from "../assets/imagens/perfil.png";
import logoFigma from "../assets/icons/Figma-logo.png";
import { FcLinux } from "react-icons/fc";

export function About_me() {
	return (
		<div className="mb-[50vh]">
			<section
				id="about"
				className="about flex flex-wrap items-center mt-10 ml-7 mr-7"
			>
				<div className="about__left flex-1 p-4">
					<h1 className="about__title text-3xl font-bold">
						Olá, eu sou Thiago!
					</h1>
					<p className="about__text mt-4 text-xl">
						Tenho 21 anos, formado em Gestão em Tecnologia da Informação. Tenho
						conhecimentos em HTML, CSS, JavaScript, Git e metodologias ágeis.
						Sou apaixonado por tecnologia e estou sempre em busca de novos
						desafios para aprimorar minhas habilidades e contribuir com projetos
						inovadores.
					</p>
					<div className="courses flex gap-4 mt-4 text-4xl">
						<Link href="#" title="Figma">
							<Image
								src={logoFigma}
								alt="Cybersecurity Badge"
								width={25}
								height={20}
							/>
						</Link>

						<Link href="#" title="HTML5">
							<FaHtml5 className="text-[#e34f26] " />
						</Link>
						<Link href="#" title="CSS3">
							<FaCss3Alt className="text-[#1572b6] " />
						</Link>
						<Link href="#" title="Talwind css">
							<SiTailwindcss className="text-[#00bcff] " />
						</Link>
						<Link href="#" title="JavaScript">
							<FaJs className="text-[#f7df1e] " />
						</Link>
						<Link href="#" title="Typescript">
							<SiTypescript className="text-[#3178C6] " />
						</Link>
						<Link href="#" title="Git">
							<FaGitAlt className="text-[#f05032] " />
						</Link>
						<Link href="#" title="Linux">
							<FcLinux />
						</Link>
						<Link
							href="https://www.credly.com/badges/b171edcd-9e83-49fe-8beb-708554115286"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={cyberBaget}
								alt="Cybersecurity Badge"
								width={40}
								height={40}
							/>
						</Link>
					</div>
				</div>
				<div className="right-0    ">
					<Image
						src={perfilPicutre}
						alt="Perfil"
						width={350}
						height={350}
						className="rounded-full"
					/>
				</div>
			</section>
		</div>
	);
}
