import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaGitAlt,
	FaArrowDown,
	FaGraduationCap,
	FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FcLinux } from "react-icons/fc";

export function About_me() {
	return (
		<div className="mb-[50vh] max-w[100vh]">
			<section
				id="about"
				className="about flex flex-wrap items-center mt-10 ml-7 mr-7"
			>
				<div className="about__left flex-1 p-4">
					<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
						Olá, eu sou Thiago!
					</h1>
					<p className="about__text mt-4 text-[16px] l lg:text-xl md:text-xl">
						Tenho 21 anos, formado em Gestão em Tecnologia da Informação. Sou
						apaixonado por tecnologia e estou sempre em busca de novos desafios
						para aprimorar minhas habilidades e contribuir com projetos
						inovadores.
					</p>
					<div>
						<div className="flex flex-row items-center text-xl mt-10">
							<FaGraduationCap className="mr-5 text-3xl" />
							<hr className="w-10 mr-5 border-t-2" />
							<h2>
								Gestão em tecnologia da Informação - Faculdade de tecnologia e
								inovação - Senac DF
							</h2>
						</div>

						<div className="flex flex-row items-center text-xl mt-5 mb-10">
							<FaGraduationCap className="mr-5 text-3xl" />
							<hr className="w-10 mr-5 border-t-2" />
							<h2>Inglês avançado - Centro de línguas</h2>
						</div>
					</div>
					<div className="courses flex gap-4 mt-4 text-2xl lg:text-4xl md:text-4xl flex-wrap text-wrap">
						<a href="#" title="HTML5">
							<FaHtml5 className="text-[#e34f26] " />
						</a>
						<a href="#" title="CSS3">
							<FaCss3Alt className="text-[#1572b6] " />
						</a>
						<a href="#" title="Talwind css">
							<SiTailwindcss className="text-[#00bcff] " />
						</a>
						<a href="#" title="JavaScript">
							<FaJs className="text-[#f7df1e] " />
						</a>
						<a href="#" title="Typescript">
							<SiTypescript className="text-[#3178C6] " />
						</a>
						<a href="#" title="React">
							<FaReact className="text-[#3cdafb] " />
						</a>
						<a href="#" title="Git">
							<FaGitAlt className="text-[#f05032] " />
						</a>
						<a href="#" title="Linux">
							<FcLinux />
						</a>
						<a
							href="https://www.credly.com/badges/b171edcd-9e83-49fe-8beb-708554115286"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/assets/icons/introduction-to-cybersecurity (3).png"
								alt="Cybersecurity Badge"
								width={40}
								height={40}
							/>
						</a>
					</div>
					<div>
						<a
							href="/assets/files/curriculo-thiago-portifolio.pdf"
							download="Curriculo-thiago.pdf"
							className=" flex flex-row items-center gap-2 px-6 py-3 mt-5 max-w-40 text-xl font-semibold text-white rounded-md shadow-md bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0"
						>
							Currículo
							<FaArrowDown />
						</a>
					</div>
				</div>

				<div className="right-0">
					<img
						src="/assets/imagens/perfil.png"
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
