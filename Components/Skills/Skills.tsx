"use client";
import { motion, type Variants } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaLinux,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiVuedotjs,
} from "react-icons/si";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const skills = [
  { icon: FaHtml5, name: "HTML5", category: "Marcação" },
  { icon: FaCss3Alt, name: "CSS3", category: "Estilo" },
  { icon: FaJs, name: "JavaScript", category: "Linguagem" },
  { icon: SiTypescript, name: "TypeScript", category: "Linguagem" },
  { icon: SiVuedotjs, name: "Vue.js", category: "Framework" },
  { icon: FaReact, name: "React", category: "Framework" },
  { icon: SiNextdotjs, name: "Next.js", category: "Framework" },
  { icon: SiTailwindcss, name: "Tailwind", category: "Estilo" },
  { icon: SiSass, name: "Sass", category: "Estilo" },
  { icon: FaGitAlt, name: "Git", category: "Controle" },
  { icon: FaLinux, name: "Linux", category: "Sistema" },
  { icon: FaDocker, name: "Docker", category: "DevOps" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full scroll-mt-24 px-6 md:px-16 lg:px-24 py-20 md:py-24"
      style={{ fontFamily: "var(--font-editorial-serif)" }}
    >
      {/* ── PALAVRA DECORATIVA ── */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-4 left-0 text-[clamp(5rem,16vw,13rem)] font-black leading-none tracking-tighter opacity-[0.04] text-current"
      >
        SKILLS
      </span>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="relative max-w-6xl mx-auto flex flex-col gap-16"
      >
        {/* ── CABEÇALHO ── */}
        <motion.header variants={fadeUp}>
          <div className="flex items-center gap-6 mb-5">
            <span
              className="text-[9px] uppercase tracking-[0.4em] opacity-35"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Stack técnica
            </span>
            <div className="h-px flex-1 bg-current opacity-15" />
            <span
              className="text-[9px] opacity-20 tabular-nums"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {String(skills.length).padStart(2, "0")}
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-semibold leading-[1.1] tracking-[-0.02em] break-words">
            Habilidades
          </h2>
        </motion.header>

        {/* ── GRID DE SKILLS ── */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-0 border-t border-l border-current border-opacity-10"
        >
          {skills.map(({ icon: Icon, name, category }) => (
            <motion.div
              key={name}
              variants={itemVariant}
              whileHover="hover"
              className="group relative flex flex-col items-center justify-center gap-3 py-6 px-4 border-b border-r border-current border-opacity-10 overflow-hidden"
            >
              {/* fill no hover */}
              <span className="absolute inset-0 bg-purple-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              {/* ícone */}
              <Icon
                className="text-3xl opacity-40 group-hover:opacity-100 group-hover:text-purple-primary transition-all duration-400 relative z-10"
                style={{ fontSize: "1.75rem" }}
              />

              {/* nome */}
              <span
                className="text-[10px] uppercase tracking-[0.2em] opacity-30 group-hover:opacity-70 transition-opacity duration-300 relative z-10 text-center leading-tight"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {name}
              </span>

              {/* categoria — aparece no hover */}
              <span
                className="absolute bottom-2 left-0 right-0 text-center text-[8px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-30 transition-opacity duration-400"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontStyle: "italic",
                }}
              >
                {category}
              </span>

              {/* linha topo no hover */}
              <span className="absolute top-0 left-0 h-[1px] w-0 bg-purple-primary group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
