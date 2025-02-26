"use client";

// Import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

import soundifyBanner from "../assets/imagens/agoravai.png"
import moedasBanner from "../assets/imagens/conversor-moedas-banner.png"
import recycleBanner from "../assets/imagens/recycle-ecology-banner.png"


// Função para gerar URL aleatória
const generateRandomImage = (index: number) => `https://picsum.photos/300/200?random=${Math.random() + index}`;

export function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1.2} // Apenas 1 slide central e um pequeno pedaço dos laterais
      centeredSlides={true}
      loop={true}
      spaceBetween={30} // Negativo para "esconder" mais os laterais
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 1.2 },
        1024: { slidesPerView: 1.25 },
      }}
      className="w-[90%] max-w-6xl max-h-72 mt-10 rounded-2xl"
    >
      <SwiperSlide>
  <div className="relative w-full h-72"> {/* Define o tamanho do container */}
    <Image
      src="https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570945/agoravai_e27jfo.png"
      alt="Imagem aleatória"
      fill
      className="rounded-lg object-cover"
    />
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="relative w-full h-72"> {/* Define o tamanho do container */}
    <Image
      src="https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570944/conversor-moedas-banner_oajcst.png"
      alt="Imagem aleatória"
      fill
      className="rounded-lg object-cover"
    />
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="relative w-full h-72"> {/* Define o tamanho do container */}
    <Image
      src="https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570943/recycle-ecology-banner_o2egpg.png"
      alt="Imagem aleatória"
      fill
      className="rounded-lg object-cover"
    />
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="relative w-full h-72"> {/* Define o tamanho do container */}
    <Image
      src="https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570945/horaMarcada-banner_kckkyu.png  "
      alt="Imagem aleatória"
      fill
      className="rounded-lg object-cover"
    />
  </div>
</SwiperSlide>

    </Swiper>
  );
};
