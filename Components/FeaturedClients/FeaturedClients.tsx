"use client";

import React from "react";

const featuredClients = [
  {
    name: "Assessoria Stratek",
    role: "Consultoria empresarial",
    description:
      "Site institucional moderno para posicionamento da assessoria com foco em credibilidade e conversão.",
    detail:
      "Navegação clara, apresentação de serviços e contato rápido para cliente empresarial.",
    href: "https://assessoriastratek.com.br/",
    image:
      "https://res.cloudinary.com/ds4ptms7d/image/upload/v1782156539/Captura_de_tela_de_2026-06-22_16-28-35_t1svfs.png",
  },
  {
    name: "Astroxz Designer",
    role: "Studio de design criativo",
    description:
      "Landing page elegante para divulgar serviços de design com identidade visual autoral.",
    detail:
      "Interface personalizada, visual editorial e portfólio para mostrar trabalhos criativos.",
    href: "https://astroxzdesigner.com.br/",
    image:
      "https://res.cloudinary.com/ds4ptms7d/image/upload/v1748537447/Captura_de_tela_de_2025-05-29_13-49-36_fgsone.png",
  },
];

export default function FeaturedClients() {
  return (
    <section id="cases" className="relative  px-6 md:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        {/* ── CABEÇALHO ── */}
        <div className="flex items-center justify-between mb-20">
          <span className="text-[11px] uppercase tracking-[0.4em] text-white/40">
            Clientes Selecionados
          </span>
          <span className="text-xs italic text-white/30">Portfolio Series</span>
        </div>

        {/* ── TÍTULO ── */}
        <h2
          className="
    text-[clamp(1.9rem,4.2vw,3.2rem)]
    leading-tight
    tracking-tight
    text-white
    mb-20
    max-w-3xl
  "
          style={{ fontFamily: "var(--font-editorial-serif)" }}
        >
          Cases de projetos digitais
        </h2>

        {/* ── GRID ── */}
        <div className="grid lg:grid-cols-2 gap-y-32 gap-x-24">
          {featuredClients.map((client, index) => (
            <article key={client.name} className="group flex flex-col">
              {/* META */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#bc9b48]">
                  {client.role}
                </span>
                <span className="text-[10px] text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* IMAGEM */}
              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative  overflow-hidden bg-zinc-900"
              >
                <img
                  src={client.image}
                  alt={`Print do site ${client.name}`}
                  loading="lazy"
                  className="
                    w-full h-full object-cover object-center
                    scale-[1.01]
                    transition-transform duration-700
                    group-hover:scale-[1.02]
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t from-black/70 via-black/30 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-700
                    flex items-end p-6
                  "
                >
                  <span className="text-xs uppercase tracking-[0.25em] text-white">
                    Ver projeto →
                  </span>
                </div>
              </a>

              {/* TEXTO */}
              <div className="mt-8 max-w-lg">
                <h3
                  className="
                    text-3xl md:text-4xl text-white mb-4
                    transition-colors duration-300
                    group-hover:text-[#bc9b48]
                  "
                  style={{ fontFamily: "var(--font-editorial-serif)" }}
                >
                  {client.name}
                </h3>

                <p
                  className="text-white/60 text-base italic mb-6"
                  style={{ fontFamily: "var(--font-editorial-serif)" }}
                >
                  {client.description}
                </p>

                <p className="text-xs text-white/40 leading-relaxed max-w-md">
                  {client.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
