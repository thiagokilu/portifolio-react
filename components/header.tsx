import Link from "next/link";
import Image from "next/image";
import logo from "../assets/icons/logo.png";
import logoWhite from "../assets/icons/logo-ta-white.png";

export function Header() {
	return (
		<header className="bg-[#3f3f3f]">
			<div className="flex flex-row justify-between w-full text-2xl p-7">
				<div className="ml-10 ">
					<Image
						src={logoWhite}
						alt="Logo do site"
						width={150}
						height={100}
						priority
						className="hidden dark:block"
					/>
					<Image
						src={logo}
						alt="Logo do site"
						width={150}
						height={100}
						priority
						className="dark:hidden"
					/>
				</div>
				<ul className="flex flex-row gap-5 mr-10">
					<li>
						<Link href="../">Home</Link>
					</li>
					<li>
						<Link href="#page__title">Projetos</Link>
					</li>
					<li>
						<Link href="../contact">Contact</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
