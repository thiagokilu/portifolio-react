"use client";
import Image from "next/image";
import giphy from "../../public/imagens/contact-animation.webp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import { motion, type Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const subscriptionSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(11, "Celular é obrigatório"),
  message: z.string().min(10, "Mensagem é obrigatória"),
});

type FormDataProps = z.infer<typeof subscriptionSchema>;

const fieldBase =
  "w-full bg-transparent border-b border-current border-opacity-15 py-3 px-0 text-sm focus:outline-none focus:border-opacity-60 transition-all duration-300 placeholder:opacity-25 font-sans";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormDataProps>({ resolver: zodResolver(subscriptionSchema) });

  const onSubmit = (data: FormDataProps) => {
    fetch("https://getform.io/f/akkynpra", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        toast.success("Mensagem enviada com sucesso!", {
          position: "bottom-right",
          autoClose: 3000,
          theme: "colored",
        });
        reset(); // Limpa todos os campos após envio bem-sucedido
      })
      .catch((err) => {
        console.error(err);
        toast.error("Erro ao enviar mensagem. Tente novamente.", {
          position: "bottom-right",
          autoClose: 3000,
          theme: "colored",
        });
      });
  };

  return (
    <section
      id="contact"
      className="relative w-full scroll-mt-24 px-6 md:px-16 lg:px-24 py-20 md:py-24 overflow-hidden"
      style={{ fontFamily: "var(--font-editorial-serif)" }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto flex flex-col gap-16"
      >
        {/* ── CABEÇALHO ── */}
        <motion.header variants={fadeUp}>
          <div className="flex items-center gap-6 mb-5">
            <span
              className="text-[9px] uppercase tracking-[0.4em] opacity-35"
              style={{ fontFamily: "var(--font-editorial-sans)" }}
            >
              Vamos conversar
            </span>
            <div className="h-px flex-1 bg-current opacity-15" />
          </div>
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-light leading-[0.88] tracking-[-0.02em]">
            Contato
          </h2>
        </motion.header>

        {/* ── CORPO ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1.4fr] gap-12 md:gap-16 items-start">
          {/* LADO ESQUERDO */}
          <motion.div variants={fadeUp} className="flex flex-col gap-10">
            <p
              className="text-lg md:text-xl font-light leading-relaxed opacity-60 max-w-xs"
              style={{
                fontFamily: "var(--font-editorial-sans)",
                fontStyle: "italic",
              }}
            >
              Tem um projeto em mente? Entre em contato e vamos construir algo
              juntos.
            </p>

            {/* gif como imagem editorial */}
            <div className="relative w-fit">
              <div className="absolute -top-2 -left-2 w-full h-full border border-current opacity-10" />
              <Image
                src={giphy}
                alt="Contato"
                width={260}
                height={180}
                unoptimized
                sizes="(max-width: 768px) 220px, 260px"
                className=" relative z-10"
              />
            </div>

            {/* assinatura */}
            <span
              className="text-[9px] uppercase tracking-[0.35em] opacity-25"
              style={{ fontFamily: "var(--font-editorial-sans)" }}
            >
              Thiago Alexandre — Desenvolvedor Front-end
            </span>
          </motion.div>

          {/* DIVISÓRIA VERTICAL */}
          <motion.div
            variants={fadeUp}
            className="hidden md:block w-px bg-current opacity-10 self-stretch"
          />

          {/* FORMULÁRIO */}
          <motion.div variants={stagger} className="flex flex-col gap-10">
            {/* campo nome */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2 group">
              <label
                htmlFor="name"
                className="text-[9px] uppercase tracking-[0.35em] opacity-30"
                style={{ fontFamily: "var(--font-editorial-sans)" }}
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                placeholder="Seu nome"
                {...register("name")}
                className={fieldBase}
                style={{ fontFamily: "var(--font-editorial-sans)" }}
              />
              {errors.name && (
                <span
                  className="text-[10px] opacity-50 tracking-wide"
                  style={{
                    fontFamily: "var(--font-editorial-sans)",
                    color: "var(--color-red-400, #f87171)",
                  }}
                >
                  {errors.name.message}
                </span>
              )}
            </motion.div>

            {/* campo email */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[9px] uppercase tracking-[0.35em] opacity-30"
                style={{ fontFamily: "var(--font-editorial-sans)" }}
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                {...register("email")}
                className={fieldBase}
                style={{ fontFamily: "var(--font-editorial-sans)" }}
              />
              {errors.email && (
                <span
                  className="text-[10px] opacity-50 tracking-wide"
                  style={{
                    fontFamily: "var(--font-editorial-sans)",
                    color: "var(--color-red-400, #f87171)",
                  }}
                >
                  {errors.email.message}
                </span>
              )}
            </motion.div>

            {/* campo celular */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-[9px] uppercase tracking-[0.35em] opacity-30"
                style={{ fontFamily: "var(--font-editorial-sans)" }}
              >
                Celular
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                {...register("phone")}
                className={fieldBase}
                style={{ fontFamily: "var(--font-editorial-sans)" }}
              />
              {errors.phone && (
                <span
                  className="text-[10px] opacity-50 tracking-wide"
                  style={{
                    fontFamily: "var(--font-editorial-sans)",
                    color: "var(--color-red-400, #f87171)",
                  }}
                >
                  {errors.phone.message}
                </span>
              )}
            </motion.div>

            {/* campo mensagem */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[9px] uppercase tracking-[0.35em] opacity-30"
                style={{ fontFamily: "var(--font-editorial-sans)" }}
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Conte-me sobre o projeto..."
                {...register("message")}
                className={`${fieldBase} resize-none`}
                style={{ fontFamily: "var(--font-editorial-sans)" }}
              />
              {errors.message && (
                <span
                  className="text-[10px] opacity-50 tracking-wide"
                  style={{
                    fontFamily: "var(--font-editorial-sans)",
                    color: "var(--color-red-400, #f87171)",
                  }}
                >
                  {errors.message.message}
                </span>
              )}
            </motion.div>

            {/* botão */}
            <motion.div variants={fadeUp}>
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="
                  group relative overflow-hidden
                  border border-current border-opacity-20
                  px-10 py-4 w-full
                  text-[10px] uppercase tracking-[0.35em]
                  font-sans
                  transition-all duration-500
                  hover:border-opacity-60
                  disabled:opacity-30 disabled:cursor-not-allowed
                "
                style={{ fontFamily: "var(--font-editorial-sans)" }}
              >
                {/* fill hover */}
                <span className="absolute inset-0 bg-purple-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <ToastContainer />
      
      {/* WhatsApp Button Flutuante */}
      <a
        href="https://wa.me/551161982633158?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
        aria-label="Contato via WhatsApp"
      >
        <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <FaWhatsapp className="w-7 h-7 text-white" />
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Fale comigo  no WhatsApp
          </div>
        </div>
      </a>
    </section>
  );
}
