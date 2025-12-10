"use client";
import { Code2, MonitorCheck, PenTool, Wrench } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ContractedServices() {
  return (
    <section
      id="Services"
      className="flex flex-col items-center justify-center px-4"
    >
      <motion.h2
        variants={card}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl font-semibold text-white mb-14 tracking-wide"
      >
        Serviços <span className="text-purple-primary">Contratáveis</span>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          max-w-6xl
          w-full
        "
      >
        {/* Card 1 */}
        <motion.div
          variants={card}
          className="group bg-white/5 border border-white/10 p-6 rounded-2xl
                     backdrop-blur-md transition-all hover:scale-105
                     hover:border-purple-primary/50"
        >
          <Code2 className="text-purple-primary w-10 h-10 mb-4" />
          <h3 className="text-xl text-white font-semibold mb-2">
            Desenvolvimento Web
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Criação de aplicações modernas, rápidas, responsivas e bem
            estruturadas.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={card}
          className="group bg-white/5 border border-white/10 p-6 rounded-2xl
                     backdrop-blur-md transition-all hover:scale-105
                     hover:border-purple-primary/50"
        >
          <MonitorCheck className="text-purple-primary w-10 h-10 mb-4" />
          <h3 className="text-xl text-white font-semibold mb-2">
            Melhorias de UI/UX
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Otimização visual e de usabilidade para uma experiência mais fluida
            e intuitiva.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={card}
          className="group bg-white/5 border border-white/10 p-6 rounded-2xl
                     backdrop-blur-md transition-all hover:scale-105
                     hover:border-purple-primary/50"
        >
          <PenTool className="text-purple-primary w-10 h-10 mb-4" />
          <h3 className="text-xl text-white font-semibold mb-2">
            Design de Interfaces
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Criação de layouts modernos, identidade visual e componentes
            personalizados.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          variants={card}
          className="group bg-white/5 border border-white/10 p-6 rounded-2xl
                     backdrop-blur-md transition-all hover:scale-105
                     hover:border-purple-primary/50"
        >
          <Wrench className="text-purple-primary w-10 h-10 mb-4" />
          <h3 className="text-xl text-white font-semibold mb-2">
            Manutenção de Sistemas
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Atualizações, correções, melhorias de performance e suporte técnico.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
