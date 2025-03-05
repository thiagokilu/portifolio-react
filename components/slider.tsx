"use client";

// Import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

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
				"https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570945/agoravai_e27jfo.png",
				"https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570944/conversor-moedas-banner_oajcst.png",
				"https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570943/recycle-ecology-banner_o2egpg.png",
				"https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570945/horaMarcada-banner_kckkyu.png",
			].map((src, index) => (
				<SwiperSlide key={index}>
					<div className="relative w-full h-34 sm:h-34 md:h-62 lg:h-69">
						{" "}
						{/* Altura ajustada */}
						<Image
							src={src}
							alt={`Slide ${index + 1}`}
							fill
							className="rounded-lg object-cover"
						/>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
