interface HeaderProps {
  setNumCard: (value: number) => void;
  setOpenProjects: (value: boolean) => void;
}

export function Header({ setNumCard, setOpenProjects }: HeaderProps) {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between py-3 px-6 ">
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
              <a
                onClick={() => {
                  setOpenProjects(false);
                  setNumCard(0);
                }}
                className="hover:text-white transition-colors hover:cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpenProjects(false);
                  setNumCard(1);
                }}
                className="hover:text-white transition-colors hover:cursor-pointer"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpenProjects(false);
                  setNumCard(2);
                }}
                className="hover:text-white transition-colors hover:cursor-pointer"
              >
                Redes Sociais
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpenProjects(false);
                  setNumCard(3);
                }}
                className="hover:text-white transition-colors hover:cursor-pointer"
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
