"use client";
import Image from "next/image";
import giphy from "../../public/giphy.gif";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const titleContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const staggerContainer = {
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

interface FormDataProps {
  name: string;
  email: string;
  message: string;
}

const subscriptionSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo"),
  email: z.string().email("Digite um email válido"),
  message: z.string().min(10, { message: "A mensagem não pode estar vazia." }),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(subscriptionSchema),
  });

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
        reset();
      })
      .catch((error) => console.error("Erro ao enviar formulário:", error));
  };

  return (
    <section id="Contact" className="mb-32 px-4 flex flex-col items-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16"
      >
        {/* LADO ESQUERDO */}
        <div className="flex flex-col gap-6">
          {/* Container com animação em cascata */}
          <motion.div
            variants={titleContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-start"
          >
            {/* Título */}
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-semibold text-white tracking-wide"
            >
              Contato
            </motion.h2>

            {/* Barrinha */}
            <motion.span
              variants={fadeUp}
              className="block w-20 h-[3px] bg-purple-primary mt-2 rounded-full"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 leading-relaxed text-lg"
          >
            Se você tem um projeto em mente, precisa de ajuda com
            desenvolvimento front-end ou apenas quer bater um papo sobre ideias
            criativas, estou aqui para ajudar.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Image src={giphy} alt="giphy" width={300} height={200} />
          </motion.div>
        </div>

        {/* FORMULÁRIO */}
        <motion.div
          variants={fadeUp}
          className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md"
        >
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Nome */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label className="text-gray-300 text-sm">Seu nome</label>
              <input
                type="text"
                {...register("name")}
                className="bg-white/10 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-purple-primary"
              />
              {errors.name && (
                <span className="text-red-400 text-sm">
                  {errors.name.message}
                </span>
              )}
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label className="text-gray-300 text-sm">Seu e-mail</label>
              <input
                type="email"
                {...register("email")}
                className="bg-white/10 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-purple-primary"
              />
              {errors.email && (
                <span className="text-red-400 text-sm">
                  {errors.email.message}
                </span>
              )}
            </motion.div>

            {/* Mensagem */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label className="text-gray-300 text-sm">Mensagem</label>
              <textarea
                rows={4}
                {...register("message")}
                className="bg-white/10 border border-white/10 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-purple-primary"
              ></textarea>
            </motion.div>

            {/* Botão */}
            <motion.button
              variants={fadeUp}
              type="submit"
              disabled={isSubmitting}
              className="bg-purple-primary hover:bg-purple-600 transition-all py-3 rounded-xl text-white font-semibold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      <ToastContainer />
    </section>
  );
}
