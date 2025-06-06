export function Header() {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <a href="../">
          <img
            src="/assets/icons/logo-ta-white.png"
            alt="Logo do site"
            width={150}
            height={100}
            className="cursor-pointer hover:scale-105 transition-transform max-w-[150px] w-full h-auto"
          />
        </a>
        <nav>
          <ul className="flex items-center gap-8 text-gray-300 text-[18px] font-semibold lg:text-xl md:text-xl">
            <li>
              <a href="../" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#page__title"
                className="hover:text-white transition-colors"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact__title"
                className="hover:text-white transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
