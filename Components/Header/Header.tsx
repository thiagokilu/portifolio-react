"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/icons/logo-ta-white.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Skills", href: "#Skills" },
    { label: "Projetos", href: "#Projects" },
    { label: "Serviços contratáveis", href: "#Services" },
    { label: "Contato", href: "#Contact" },
  ];

  return (
    <header className="w-full py-4">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="w-32">
          <Image src={Logo} alt="Logo" priority />
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex flex-row gap-10 text-lg font-medium text-white">
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

        {/* Botão Mobile */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={40} /> : <Menu size={40} />}
        </button>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`
          md:hidden transition-all duration-300 overflow-hidden bg-[#141414]
          ${open ? "max-h-96 py-6" : "max-h-0 py-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-6 text-xl font-medium text-white">
          {links.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer hover:text-purple-400 transition-colors"
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
