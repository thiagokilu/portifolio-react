"use client";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import LogoWhite from "../../public/icons/logo-ta-white.png";
import LogoDark from "../../public/icons/logo.png";
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
      className="w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-sm border-b border-current border-opacity-[0.06]"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between h-16">
        {/* ── LOGO ── */}
        <div className="w-24 opacity-80 hover:opacity-100 transition-opacity duration-300">
          <Link href="/">
            <Image
              src={theme === "dark" ? LogoWhite : LogoDark}
              alt="Thiago Dev"
              priority
            />
          </Link>
        </div>

        {/* ── NAV DESKTOP ── */}
        <ul className="hidden md:flex items-center gap-0">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative flex items-center px-4 h-16 text-[9px] uppercase tracking-[0.3em] opacity-100 transition-opacity duration-300"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {item.label}
                {/* linha inferior crescente */}
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-purple-primary group-hover:w-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </a>
            </li>
          ))}

          {/* divisória */}
          <li className="w-px h-4 bg-current opacity-15 mx-3" />

          {/* toggle tema */}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Mudar tema"
              className="group flex items-center justify-center w-10 h-10 opacity-100 transition-opacity duration-300"
            >
              {theme === "dark" ? (
                <SunIcon className="w-3.5 h-3.5" strokeWidth={1.5} />
              ) : (
                <MoonIcon className="w-3.5 h-3.5" strokeWidth={1.5} />
              )}
            </button>
          </li>
        </ul>

        {/* ── BOTÃO MOBILE ── */}
        <button
          className="md:hidden opacity-100 transition-opacity duration-300"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? (
            <X className="w-5 h-5" strokeWidth={1.5} />
          ) : (
            <Menu className="w-5 h-5" strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* ── MENU MOBILE ── */}
      <div
        className={`
          md:hidden border-t border-current border-opacity-[0.06]
          bg-background overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${open ? "max-h-72 py-6" : "max-h-0 py-0"}
        `}
      >
        <ul className="flex flex-col px-6 md:px-16 lg:px-24">
          {links.map((item, i) => (
            <li
              key={item.href}
              className="border-b border-current border-opacity-[0.06] last:border-b-0"
            >
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="group relative flex items-center justify-between py-4 text-[9px] uppercase tracking-[0.3em] opacity-100 transition-opacity duration-300"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <span>{item.label}</span>
                <span
                  className="text-[8px] opacity-100 tabular-nums"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            </li>
          ))}

          {/* tema mobile */}
          <li className="pt-4 flex items-center justify-between">
            <span
              className="text-[9px] uppercase tracking-[0.3em] opacity-100"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Tema
            </span>
            <button
              onClick={toggleTheme}
              aria-label="Mudar tema"
              className="opacity-100 transition-opacity duration-300"
            >
              {theme === "dark" ? (
                <SunIcon className="w-3.5 h-3.5" strokeWidth={1.5} />
              ) : (
                <MoonIcon className="w-3.5 h-3.5" strokeWidth={1.5} />
              )}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
