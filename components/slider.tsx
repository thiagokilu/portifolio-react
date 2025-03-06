"use client";

// Import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

export function Slider() {
	return (
		<Swiper
			modules={[Navigation, Pagination]}
			slidesPerView={1} // 1 slide por vez em telas menores
			centeredSlides={true}
			loop={true}
			spaceBetween={10} // Pequeno espaçamento entre os slides
			navigation
			pagination={{ clickable: true }}
			breakpoints={{
				640: { slidesPerView: 1.1, spaceBetween: 15 }, // A partir de 640px
				768: { slidesPerView: 1.2, spaceBetween: 20 }, // A partir de 768px
				1024: { slidesPerView: 1.3, spaceBetween: 30 }, // A partir de 1024px
			}}
			className="max-w-7xl mt-5"
		>
			{[
				{
					imageUrl:
						"https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570945/agoravai_e27jfo.png",
					pageUrl: "https://soundify-five.vercel.app/",
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570944/conversor-moedas-banner_oajcst.png",
					pageUrl: "https://conversor-de-moedas-tau.vercel.app/",
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570943/recycle-ecology-banner_o2egpg.png",
					pageUrl:
						"https://www.figma.com/design/j5V2lLkMvaBj4paCLMuO0q/Recycle-Ecology-aplicativo?t=TQcT3cwhzpi9VB6i-0",
				},
				{
					imageUrl:
						"https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570945/horaMarcada-banner_kckkyu.png",
					pageUrl:
						"https://www.figma.com/design/Z9jPdhmS9ZbBQQQ069BUYW/App-gestor-de-filas?node-id=0-1&p=f&t=4rRrL3ZUxLZPIHze-0",
				},
			].map((src, index) => (
				<SwiperSlide key={index}>
					<div className="relative w-full h-34 sm:h-34 md:h-62 lg:h-69">
						{" "}
						{/* Altura ajustada */}
						<Link href={src.pageUrl}>
							<Image
								src={src.imageUrl}
								alt={`Slide ${index + 1}`}
								fill
								className="rounded-lg object-cover"
							/>
						</Link>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
