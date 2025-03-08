import { Footer } from "./footer";
import { Header } from "./header";
import Image from "next/image";
import gif from "../assets/imagens/giphy.gif";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";

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

	const onSubmit = (data) => {
		fetch("https://getform.io/f/akkynpra", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				toast.success("Menssagem envida com sucesso!", {
					position: "bottom-right",
					autoClose: 3000, // Tempo em ms
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					theme: "colored",
				});
			})
			.catch((error) => console.error("Erro ao enviar formulário:", error));
	};

	return (
		<div className="">
			<main className="flex justify-center items-center p-8 mt-10">
				<div className="flex flex-wrap gap-8 max-w-4xl w-full items-start">
					<div className="flex-1">
						<Image src={gif} alt="Animated GIF" width={300} height={200} />
						<p className="mt-4 max-w-80">
							Se você tem um projeto em mente, precisa de ajuda com
							desenvolvimento front-end ou apenas quer bater um papo sobre
							ideias criativas, estou aqui para ajudar.
						</p>
					</div>
					<form
						className="flex-1 flex flex-col gap-4"
						onSubmit={handleSubmit(onSubmit)}
					>
						<input
							type="text"
							id="input-name"
							{...register("name")}
							placeholder="Nome"
							className="p-2 bg-[#334155] rounded-md border-0"
						/>
						{errors.name && (
							<span className="text-red-400">{errors.name.message}</span>
						)}

						<input
							type="email"
							id="input-email"
							{...register("email")}
							placeholder="E-mail"
							className="p-2 bg-[#334155] rounded-md border-0"
						/>
						{errors.email && (
							<span className="text-red-400">{errors.email.message}</span>
						)}

						<textarea
							placeholder="Mensagem"
							{...register("message")}
							className="p-2 bg-[#334155] rounded-md border-0"
						/>
						{errors.message && (
							<span className="text-red-400">{errors.message?.message}</span>
						)}

						<input
							type="submit"
							value="Enviar"
							className="p-2 bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 text-white rounded-md cursor-pointer hover:bg-blue-600"
						/>
					</form>
				</div>
				<ToastContainer />
			</main>
		</div>
	);
}
