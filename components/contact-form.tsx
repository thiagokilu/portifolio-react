import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPaperPlane } from "react-icons/fa";
import { useState, useEffect } from "react";

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

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(subscriptionSchema),
  });

  const onSubmit = (data: FormDataProps) => {
    fetch("https://getform.io/f/akkynpra", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        toast.success("Mensagem enviada com sucesso!", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      })
      .catch((error) => console.error("Erro ao enviar formulário:", error));
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      <section
        id="contact"
        className={`max-w-6xl w-full bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700 lg:-mt-20 transform transition-all duration-700 ease-out
    ${show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
  `}
      >
        <div className="flex flex-col md:flex-row">
          <div className="p-8 md:p-12 space-y-8 md:w-1/2 order-2 md:order-1">
            <div>
              <span className="text-sm font-medium text-cyan-400">
                ENTRE EM CONTATO
              </span>
              <h1 className="text-4xl font-bold mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Vamos conversar
              </h1>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Se você tem um projeto em mente, precisa de ajuda com
                desenvolvimento front-end ou apenas quer bater um papo sobre
                ideias criativas, estou aqui para ajudar.
              </p>
            </div>

            <div className="flex items-center justify-center mt-8">
              <img
                src="/assets/imagens/giphy.gif"
                alt="Animated GIF"
                className="rounded-lg border border-gray-600 max-w-full h-auto"
                width={300}
              />
            </div>
          </div>

          <div className="p-8 md:p-12 bg-gradient-to-br from-gray-700 to-gray-900 md:w-1/2 order-1 md:order-2">
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <input
                  type="text"
                  id="input-name"
                  {...register("name")}
                  placeholder="Nome"
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 text-gray-200 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
                />
                {errors.name && (
                  <span className="text-red-400 text-sm mt-1 block">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <input
                  type="email"
                  id="input-email"
                  {...register("email")}
                  placeholder="E-mail"
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 text-gray-200 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
                />
                {errors.email && (
                  <span className="text-red-400 text-sm mt-1 block">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <textarea
                  placeholder="Mensagem"
                  {...register("message")}
                  rows={5}
                  className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 text-gray-200 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
                />
                {errors.message && (
                  <span className="text-red-400 text-sm mt-1 block">
                    {errors.message?.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 mt-2 text-white bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
              >
                Enviar Mensagem
                <FaPaperPlane className="ml-2" />
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  );
}
