"use client";
import { useEffect, useState } from "react";
import { LanguagesIcon, Menu, MoonIcon, SunIcon, X } from "lucide-react";
import Image from "next/image";
import LogoWhite from "../../public/icons/logo-ta-white.png";
import LogoDark from "../../public/icons/logo.png";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Flag from "react-world-flags";

type AvaliableThemes = "dark" | "light";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("nav");
  const links = [
    { label: t("projects"), href: "#projects" },
    { label: t("services"), href: "#services" },
    { label: t("contact"), href: "#contact" },
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
                absolute left-0 -bottom-1 w-0 h-[2px]
                bg-purple-primary transition-all duration-300 group-hover:w-full
              "
              ></span>
            </li>
          ))}
          <li className="relative group flex items-center justify-center">
            <button
              onClick={handleThemeChange}
              aria-label="Mudar tema"
              className="
      flex items-center justify-center
      p-2 rounded-full
      transition-all duration-300
      hover:scale-110
    "
            >
              {theme === "dark" ? (
                <SunIcon
                  size={24}
                  className="text-yellow-400 transition-transform duration-300 group-hover:rotate-12"
                />
              ) : (
                <MoonIcon
                  size={24}
                  className="text-purple-600 transition-transform duration-300 group-hover:-rotate-12"
                />
              )}
            </button>

            {/* Tooltip */}
            <span
              className="
      absolute top-full mt-2 left-1/2 -translate-x-1/2
      opacity-0 group-hover:opacity-100
      transition-all duration-200
      bg-zinc-900 text-white text-xs px-2 py-1 rounded
      whitespace-nowrap
      pointer-events-none
    "
            >
              Mudar tema
            </span>
          </li>
          <li className="relative group flex items-center justify-center">
            <span
              className="
                absolute left-0 -bottom-1 w-0 h-[2px]
                bg-purple-primary transition-all duration-300 group-hover:w-full
              "
            ></span>

            <button
              type="button"
              onClick={() => {
                router.push(locale === "pt" ? "/en" : "/pt");
              }}
              aria-label={
                locale === "pt"
                  ? "Mudar idioma para Inglês"
                  : "Mudar idioma para Português"
              }
              title={locale === "pt" ? "English" : "Português"}
              className="flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-full"
            >
              {locale === "pt" ? (
                <Flag code="BR" className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Flag code="US" className="w-6 h-6" aria-hidden="true" />
              )}
            </button>

            <span
              className="
                absolute left-0 -bottom-1 w-0 h-[2px]
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
          <li>
            <button
              onClick={handleThemeChange}
              className="flex items-center justify-center  p-2 rounded "
            >
              {theme === "dark" ? (
                <SunIcon
                  size={24}
                  className="text-yellow-400 transition-transform duration-300 group-hover:rotate-12"
                />
              ) : (
                <MoonIcon
                  size={24}
                  className="text-purple-600 transition-transform duration-300 group-hover:-rotate-12"
                />
              )}
            </button>
          </li>
          <li className="relative group flex items-center justify-center">
            <span
              className="
      absolute left-0 -bottom-1 w-0 h-[2px]
      bg-purple-primary transition-all duration-300 group-hover:w-full
    "
            ></span>

            <button
              type="button"
              onClick={() => {
                router.push(locale === "pt" ? "/en" : "/pt");
              }}
              aria-label={
                locale === "pt"
                  ? "Mudar idioma para Inglês"
                  : "Mudar idioma para Português"
              }
              title={locale === "pt" ? "English" : "Português"}
              className="flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-full"
            >
              {locale === "pt" ? (
                <Flag code="BR" className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Flag code="US" className="w-6 h-6" aria-hidden="true" />
              )}
            </button>

            <span
              className="
      absolute left-0 -bottom-1 w-0 h-[2px]
      bg-purple-primary transition-all duration-300 group-hover:w-full
    "
            ></span>
          </li>
        </ul>
      </div>
    </header>
  );
}
