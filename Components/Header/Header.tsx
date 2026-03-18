"use client";
import { useEffect, useState } from "react";
import { LanguagesIcon, Menu, MoonIcon, SunIcon, X } from "lucide-react";
import Image from "next/image";
import LogoWhite from "../../public/icons/logo-ta-white.png";
import LogoDark from "../../public/icons/logo.png";
import { useRouter } from "next/navigation";

type AvaliableThemes = "dark" | "light";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const links = [
    { label: "Projetos", href: "#projects" },
    { label: "Serviços", href: "#services" },
    { label: "Contato", href: "#contact" },
  ];

  const [theme, setTheme] = useState<AvaliableThemes>("dark");

  function handleThemeChange(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="w-full py-4">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="w-32">
          {theme === "dark" ? (
            <Image src={LogoWhite} alt="Thiago Dev - Logo" priority />
          ) : (
            <Image src={LogoDark} alt="Thiago Dev - Logo" priority />
          )}
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex flex-row gap-10 text-lg font-medium items-center">
          {links.map((item, i) => (
            <li key={i} className="cursor-pointer relative group text-xl">
              <a href={item.href}>{item.label}</a>

              {/* Efeito linha */}
              <span
                className="
                absolute left-0 -bottom-1 w-0 h-0.5
                bg-purple-primary transition-all duration-300 group-hover:w-full
              "
              ></span>
            </li>
          ))}
          <li className="relative group flex items-center justify-center">
            <button
              onClick={handleThemeChange}
              aria-label="Mudar tema"
              className="p-2 rounded-full hover:bg-purple-primary/10 transition-colors"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>

            <span
              className="
                absolute left-0 -bottom-1 w-0 h-0.5
                bg-purple-primary transition-all duration-300 group-hover:w-full
              "
            ></span>
          </li>
        </ul>

        {/* Botão Mobile */}
        <button className="md:hidden " onClick={() => setOpen(!open)}>
          {open ? <X size={40} /> : <Menu size={40} />}
        </button>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`
          flex flex-col items-center gap-6
          md:hidden transition-all duration-300 overflow-hidden bg-background
          ${open ? "max-h-96 py-6" : "max-h-0 py-0"}
        `}
      >
        {links.map((item, i) => (
          <li key={i} className="cursor-pointer relative group text-xl">
            <a href={item.href}>{item.label}</a>

            {/* Efeito linha */}
            <span
              className="
                absolute left-0 -bottom-1 w-0 h-0.5
                bg-purple-primary transition-all duration-300 group-hover:w-full
              "
            ></span>
          </li>
        ))}
        <li className="relative group flex items-center justify-center">
          <button
            onClick={handleThemeChange}
            aria-label="Mudar tema"
            className="p-2 rounded-full hover:bg-purple-primary/10 transition-colors"
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>

          <span
            className="
              absolute left-0 -bottom-1 w-0 h-0.5
              bg-purple-primary transition-all duration-300 group-hover:w-full
            "
            ></span>
        </li>
      </div>
    </header>
  );
}
