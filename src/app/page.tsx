"use client";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Slider } from "../../components/slider";
import { About_me } from "../../components/about-me";
import { CardGroup } from "../../components/card-group";
import { ContactForm } from "../../components/contact-form";

export default function Home() {
	return (
		<div>
			<Header />
			<About_me />

			<div className="flex justify-center items-center text-2xl mt-20">
				<h1 id="page__title" className="sub-header mt-20">
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
				className="text-2xl font-semibold flex items-center justify-center"
			>
				Contact
			</h2>
			<ContactForm />
			<Footer />
		</div>
	);
}
