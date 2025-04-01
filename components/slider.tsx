import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface Project {
	imageUrl: string;
	pageUrl: string;
	title: string;
}

const projects: Project[] = [
	{
		imageUrl:
			"https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570945/agoravai_e27jfo.png",
		pageUrl: "https://soundify-five.vercel.app/",
		title: "Soundify",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570944/conversor-moedas-banner_oajcst.png",
		pageUrl: "https://conversor-de-moedas-tau.vercel.app/",
		title: "Conversor de Moedas",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570943/recycle-ecology-banner_o2egpg.png",
		pageUrl:
			"https://www.figma.com/design/j5V2lLkMvaBj4paCLMuO0q/Recycle-Ecology-aplicativo?t=TQcT3cwhzpi9VB6i-0",
		title: "Recycle Ecology",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570945/horaMarcada-banner_kckkyu.png",
		pageUrl:
			"https://www.figma.com/design/Z9jPdhmS9ZbBQQQ069BUYW/App-gestor-de-filas?node-id=0-1&p=f&t=4rRrL3ZUxLZPIHze-0",
		title: "Hora Marcada",
	},
];

export function Slider() {
	return (
		<div className="relative mx-auto max-w-7xl px-4 mt-5">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				slidesPerView={1}
				centeredSlides={true}
				loop={true}
				spaceBetween={10}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				breakpoints={{
					640: { slidesPerView: 1.1, spaceBetween: 15 },
					768: { slidesPerView: 1.2, spaceBetween: 20 },
					1024: { slidesPerView: 1.3, spaceBetween: 30 },
				}}
				className="w-full"
			>
				{projects.map((project, index) => (
					<SwiperSlide key={index} className="pb-12">
						<div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-64 rounded-lg overflow-hidden shadow-lg">
							<a
								href={project.pageUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={project.imageUrl}
									alt={`${project.title || `Slide ${index + 1}`}`}
									className="object-cover transition-transform duration-300 hover:scale-105 w-full h-full"
								/>
							</a>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
