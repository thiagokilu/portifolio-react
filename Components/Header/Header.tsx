"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/icons/thiagodev.svg";
import Link from "next/link";

type AvailableThemes = "dark" | "light";

const links = [
  { label: "Sobre", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Serviços", href: "#services" },
  { label: "Contato", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header
      className="w-full fixed top-0 left-0 z-50  select-none cursor-none"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <nav className=" px-6 md:px-12 flex items-center justify-between h-[60px]">
        {/* ── LOGO (Mantida a original com estilo do print) ── */}
        <div className="w-32 cursor-none">
          <Link href="/">
            <Image
              src={Logo}
              alt="Thiago Dev"
              className="dark:invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </Link>
        </div>

        {/* ── NAV DESKTOP (Estilo 12px / 0.1em) ── */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-2 list-none m-0 p-0">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative flex items-center px-4 py-2 text-[12px] font-normal uppercase tracking-[0.1em] text-[#93938F] hover:text-[#EDEDE8] transition-colors duration-300 cursor-none"
                >
                  {item.label}
                  {/* Linha inferior baseada no CSS .nav-links a::after */}
                  <span className="absolute bottom-1 left-4 h-[1px] w-0 bg-[#EDEDE8] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-[calc(100%-2rem)]" />
                </a>
              </li>
            ))}
          </ul>

          {/* ── TOGGLE TEMA (Design oval 39.6px x 20px) ── */}
          <button
            onClick={toggleTheme}
            aria-label="Mudar tema"
            className="flex items-center gap-2 px-3 rounded-full border border-[#EDEDE8]/10 hover:border-[#EDEDE8]/30 transition-all duration-300 cursor-none"
            style={{ height: "20px" }}
          >
            {/* Ícone meio-a-meio customizado */}
            <div className="w-[10px] h-[10px] rounded-full border border-[#EDEDE8] flex overflow-hidden">
              <div
                className={`w-1/2 h-full ${theme === "dark" ? "bg-[#EDEDE8]" : "bg-transparent"}`}
              />
              <div
                className={`w-1/2 h-full ${theme === "light" ? "bg-[#EDEDE8]" : "bg-transparent"}`}
              />
            </div>
            <span className="text-[#EDEDE8] text-[10px] font-bold uppercase leading-none tracking-tighter">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>
        </div>

        {/* ── BOTÃO MOBILE ── */}
        <button
          className="md:hidden text-[#EDEDE8] cursor-none"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? (
            <X size={20} strokeWidth={1.5} />
          ) : (
            <Menu size={20} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* ── MENU MOBILE ── */}
      <div
        className={`
          md:hidden bg-[#0C0C0B] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${open ? "max-h-[100vh] py-8 border-t border-[#EDEDE8]/5" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col px-8">
          {links.map((item, i) => (
            <li
              key={item.href}
              className="border-b border-[#EDEDE8]/5 last:border-b-0"
            >
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-5 text-[12px] font-normal uppercase tracking-[0.1em] text-[#EDEDE8] cursor-none"
              >
                <span>{item.label}</span>
                <span className="text-[10px] opacity-30 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            </li>
          ))}

          {/* tema mobile */}
          <li className="pt-6 flex items-center justify-between">
            <span className="text-[12px] uppercase tracking-[0.1em] text-[#93938F]">
              Tema
            </span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#EDEDE8]/10 text-[#EDEDE8] text-[10px] uppercase font-bold"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
