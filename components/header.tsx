import Link from "next/link";
import Image from "next/image";
import logoWhite from "../assets/icons/logo-ta-white.png";

export function Header() {
	return (
		<header className="bg-[#1e293b] shadow-md">
			<div className="container mx-auto flex items-center justify-between py-5 px-6">
				<Link href="../">
					<Image
						src={logoWhite}
						alt="Logo do site"
						width={150}
						height={100}
						priority
						className="cursor-pointer hover:scale-105 transition-transform"
					/>
				</Link>
				<nav>
					<ul className="flex items-center gap-8 text-lg text-gray-300">
						<li>
							<Link href="../" className="hover:text-white transition-colors">
								Home
							</Link>
						</li>
						<li>
							<Link
								href="#page__title"
								className="hover:text-white transition-colors"
							>
								Projetos
							</Link>
						</li>
						<li>
							<Link
								href="#contact__title"
								className="hover:text-white transition-colors"
							>
								Contato
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
