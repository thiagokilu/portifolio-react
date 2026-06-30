"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import LogoDark from "../../public/imagens/logothiagodevsemfundob.png";
import LogoLight from "../../public/imagens/logothiagodevsemfundop.png";
import Link from "next/link";

type AvailableThemes = "dark" | "light";

const links = [
  { label: "Sobre", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Cases", href: "#cases" },
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
    const storedTheme = window.localStorage.getItem("theme");

    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header
      className="w-full fixed top-0 left-0 z-40  select-none cursor-none bg-background"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <nav className=" px-6 md:px-12 flex items-center justify-between h-[60px]">
        {/* ── LOGO ── */}
        <div className="w-40 cursor-none">
          <Link href="/">
            <Image
              src={theme === "dark" ? LogoDark : LogoLight}
              alt="Thiago Dev"
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
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
                  className="group relative flex items-center px-4 py-2 text-[12px] font-normal uppercase tracking-[0.1em] text-[var(--color-text-muted)] hover:text-[#bc9b48] transition-colors duration-300 cursor-none"
                >
                  {item.label}
                  {/* Linha inferior baseada no CSS .nav-links a::after */}
                  <span className="absolute bottom-1 left-4 h-[1px] w-0 bg-[#bc9b48] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-[calc(100%-2rem)]" />
                </a>
              </li>
            ))}
          </ul>

          {/* ── TOGGLE TEMA (Design oval 39.6px x 20px) ── */}
          <button
            onClick={toggleTheme}
            aria-label="Mudar tema"
            className="flex items-center gap-2 px-3 rounded-full border border-[var(--foreground)] hover:border-[#bc9b48] transition-all duration-300 cursor-none"
            style={{ height: "20px" }}
          >
            {/* Ícone meio-a-meio customizado */}
            <div className="w-[10px] h-[10px] rounded-full border border-[var(--foreground)] flex overflow-hidden">
              <div
                className={`w-1/2 h-full ${theme === "dark" ? "bg-[#bc9b48]" : "bg-transparent"}`}
              />
              <div
                className={`w-1/2 h-full ${theme === "light" ? "bg-[#bc9b48]" : "bg-transparent"}`}
              />
            </div>
            <span className="text-[var(--foreground)] text-[10px] font-bold uppercase leading-none tracking-tighter">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>
        </div>

        {/* ── BOTÃO MOBILE ── */}
        <button
          className="md:hidden text-[var(--foreground)] cursor-none"
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
          md:hidden bg-[var(--background)] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${open ? "max-h-[100vh] py-8 border-t border-[var(--foreground)]" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col px-8">
          {links.map((item, i) => (
            <li
              key={item.href}
              className="border-b border-[var(--foreground)] last:border-b-0"
            >
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-5 text-[12px] font-normal uppercase tracking-[0.1em] text-[var(--foreground)] cursor-none"
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
            <span className="text-[12px] uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
              Tema
            </span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--foreground)] text-[var(--foreground)] text-[10px] uppercase font-bold"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
