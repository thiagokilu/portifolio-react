"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TEXT = "CREATIVE • PROJECTS • ";
const CHARS = TEXT.split("");
const RADIUS = 85;

export default function LoadingPage() {
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // 1. Simulação do progresso (Lógica de contagem)
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.random() > 0.8 ? 10 : 2; // Saltos variáveis para parecer real
        return Math.min(prev + step, 100);
      });
    }, 100);

    // 2. Garantia de carregamento total + tempo mínimo de exibição
    const minTime = new Promise((res) => setTimeout(res, 2500));

    Promise.all([minTime]).then(() => {
      setPercent(100); // Força 100% antes de sair
      setTimeout(() => setIsDone(true), 500);
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -100, // Sobe ao sair
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950 text-white"
        >
          <div className="relative flex items-center justify-center">
            {/* Texto Circular */}
            <motion.svg
              width="250"
              height="250"
              viewBox="0 0 250 250"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 125, 125 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                />
              </defs>
              <text
                fill="white"
                fontSize="16"
                fontWeight="bold"
                letterSpacing="4"
              >
                <textPath xlinkHref="#circlePath">
                  {TEXT.repeat(2)}{" "}
                  {/* Repete para preencher melhor o círculo se necessário */}
                </textPath>
              </text>
            </motion.svg>

            {/* Contador Central */}
            <div className="absolute flex flex-col items-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-5xl font-mono font-black tracking-tighter"
              >
                {percent}%
              </motion.span>
              <motion.div
                className="h-[2px] bg-white mt-1"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                style={{ width: `${percent * 0.4}px` }}
              />
            </div>
          </div>

          {/* Dica visual de rodapé */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            className="absolute bottom-10 text-xs uppercase tracking-[0.3em]"
          >
            Iniciando Portfólio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
