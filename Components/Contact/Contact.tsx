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

interface ContactProps {
  title: string;
  description: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  nameError: string;
  emailError: string;
  messageError: string;
  sending: string;
  send: string;
  success: string;
}

export default function Contact({
  title,
  description,
  nameLabel,
  emailLabel,
  messageLabel,
  nameError,
  emailError,
  messageError,
  sending,
  send,
  success,
}: ContactProps) {
  const subscriptionSchema = z.object({
    name: z.string().min(2, nameError),
    email: z.string().email(emailError),
    message: z.string().min(10, { message: messageError }),
  });

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
        toast.success(success, {
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
              className="text-4xl font-semibold  tracking-wide"
            >
              {title}
            </motion.h2>

            {/* Barrinha */}
            <motion.span
              variants={fadeUp}
              className="block w-20 h-[3px] bg-purple-primary mt-2 rounded-full"
            />
          </motion.div>

          <motion.p variants={fadeUp} className="leading-relaxed text-lg">
            {description}
          </motion.p>

          <motion.div variants={fadeUp}>
            <Image 
              src={giphy} 
              alt="Contato - Entre em contato com Thiago Alexandre, Desenvolvedor Front-end" 
              width={300} 
              height={200} 
            />
          </motion.div>
        </div>

        {/* FORMULÁRIO */}
        <motion.div variants={fadeUp} className="glass-surface p-8 rounded-2xl">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Nome */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm">
                {nameLabel}
              </label>

              <input
                id="name"
                type="text"
                {...register("name")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="bg-[var(--background)] border border-foreground/10 px-4 py-3 rounded-xl focus:outline-none focus:border-purple-primary"
              />

              {errors.name && (
                <span id="name-error" className="text-red-400 text-sm">
                  {errors.name.message}
                </span>
              )}
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm">
                {emailLabel}
              </label>

              <input
                id="email"
                type="email"
                {...register("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="bg-[var(--background)] border border-foreground/10 px-4 py-3 rounded-xl focus:outline-none focus:border-purple-primary"
              />

              {errors.email && (
                <span id="email-error" className="text-red-400 text-sm">
                  {errors.email.message}
                </span>
              )}
            </motion.div>

            {/* Mensagem */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm">
                {messageLabel}
              </label>

              <textarea
                id="message"
                rows={4}
                {...register("message")}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="bg-[var(--background)] border border-foreground/10 px-4 py-3 rounded-xl focus:outline-none focus:border-purple-primary"
              />

              {errors.message && (
                <span id="message-error" className="text-red-400 text-sm">
                  {errors.message.message}
                </span>
              )}
            </motion.div>

            {/* Botão */}
            <motion.button
              variants={fadeUp}
              type="submit"
              disabled={isSubmitting}
              className="bg-purple-primary text-white hover:bg-purple-600 transition-all py-3 rounded-xl  font-semibold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? sending : send}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      <ToastContainer />
    </section>
  );
}
