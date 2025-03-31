import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Slider } from "../components/slider";
import { About_me } from "../components/about-me";
import { CardGroup } from "../components/card-group";
import { ContactForm } from "../components/contact-form";

export default function App() {
	return (
		<div className="bg-[#0f172a] text-white">
			<Header />
			<About_me />

			<div className="flex justify-center items-center text-2xl mt-20 flex-wrap">
				<h1
					id="page__title"
					className="sub-header text-2xl lg:text-4xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text break-words whitespace-normal text-center"
				>
					"Transformando ideias em experiências digitais únicas."
				</h1>
			</div>

			<Slider />

			<main>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
					<h2 className="text-4xl font-bold text-center mb-16">
						Projetos Recentes
					</h2>
					<CardGroup />
				</div>
			</main>
			<h2
				id="contact__title"
				className="text-4xl font-semibold flex items-center justify-center"
			>
				Contato
			</h2>
			<ContactForm />
			<Footer />
		</div>
	);
}
