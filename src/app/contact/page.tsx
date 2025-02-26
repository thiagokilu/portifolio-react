import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header";
import Image from "next/image";
import gif from "../../../assets/imagens/giphy.gif"

export default function Contact() {
    return(
        <div>
            <Header/>
            <main className="flex justify-center items-center p-8 mt-10">
      <div className="flex flex-wrap gap-8 max-w-4xl w-full items-start">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Contact Us</h2>

          <Image
           src={gif}
            alt="Animated GIF"
            width={300}
            height={200}
          />
          <p className="mt-4 text-gray-700 max-w-80">
            Se você tem um projeto em mente, precisa de ajuda com
            desenvolvimento front-end ou apenas quer bater um papo sobre ideias
            criativas, estou aqui para ajudar.
          </p>
        </div>
        <form className="flex-1 flex flex-col gap-4" action="https://getform.io/f/akkynpra" method="POST">
          <input
            type="text"
            id="input-name"
            name="nome"
            placeholder="Nome"
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            id="input-email"
            name="e-mail"
            placeholder="E-mail"
            className="p-2 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Mensagem"
            name="mensagem"
            className="p-2 border border-gray-300 rounded-md h-32"
          />
          <input
            type="submit"
            value="Enviar"
            className="p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
          />
        </form>
      </div>
    </main>
            <Footer/>
            </div>
    )
}