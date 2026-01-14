"use client";
import { useEffect, useState } from "react";
import { Menu, MoonIcon, SunIcon, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/icons/logo-ta-white.png";

type AvaliableThemes = "dark" | "light";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Skills", href: "#Skills" },
    { label: "Projetos", href: "#Projects" },
    { label: "Serviços contratáveis", href: "#Services" },
    { label: "Contato", href: "#Contact" },
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
          <Image src={Logo} alt="Logo" priority />
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex flex-row gap-10 text-lg font-medium ">
          {links.map((item, i) => (
            <li key={i} className="cursor-pointer relative group text-xl">
              <a href={item.href}>{item.label}</a>

              {/* Efeito linha */}
              <span
                className="
                absolute left-0 -bottom-1 w-0 h-[2px]
                bg-purple-primary transition-all duration-300 group-hover:w-full
              "
              ></span>
            </li>
          ))}
        </ul>
        <div className="relative group">
  <button
    onClick={handleThemeChange}
    className="flex items-center justify-center text-white p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
  >
    {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
  </button>

  <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 
    opacity-0 group-hover:opacity-100 transition
    bg-zinc-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
    Mudar tema
  </span>
</div>

        

        {/* Botão Mobile */}
        <button className="md:hidden " onClick={() => setOpen(!open)}>
          {open ? <X size={40} /> : <Menu size={40} />}
        </button>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`
          md:hidden transition-all duration-300 overflow-hidden bg-[var(--background)]
          ${open ? "max-h-96 py-6" : "max-h-0 py-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-6 text-xl font-medium ">
          {links.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer hover:text-purple-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
