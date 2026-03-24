"use client";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue,
} from "framer-motion";

const TEXT = "CREATIVE • PROJECTS • ";

export default function LoadingPage() {
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // 1. Configuração do Cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // O Spring dá o efeito "elástico" e suave
  const springConfig = {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // 2. Listener de movimento do mouse
    const moveMouse = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveMouse);

    // Lógica do contador (seu código original)
    const interval = setInterval(() => {
      setPercent((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 50);

    setTimeout(() => setIsDone(true), 3500);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* 3. O Cursor Branco */}
      {/* Cursor Container (O círculo com borda) */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-white rounded-full pointer-events-none z-[10000] mix-blend-difference flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* A Bolinha Branca (O preenchimento central) */}
        <div className="w-8 h-8 bg-white rounded-full" />
      </motion.div>

      {/* Esconde o cursor padrão em toda a tela */}
      <style jsx global>{`
        html,
        body {
          cursor: none !important;
        }
        button,
        a {
          cursor: none !important;
        }
      `}</style>

      <AnimatePresence>
        {!isDone && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100, transition: { duration: 0.8 } }}
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
    </>
  );
}
