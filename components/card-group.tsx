import {
	FaHtml5,
	FaCss3Alt,
	FaJsSquare,
	FaNodeJs,
	FaFigma,
	FaReact,
} from "react-icons/fa";
import { Card } from "./card";

export function CardGroup() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8 xs:flex xs:flex-col xs:items-center">
			<Card
				linkProjeto="https://soundify-five.vercel.app/"
				linkImg="https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570943/soundify-card_dmwzyv.jpg"
				title="Soundify"
				description="Plataforma de streaming musical com integração de API e player customizado."
				icons={
					<div className="flex gap-3 text-xl mb-3">
						<FaHtml5 />
						<FaCss3Alt />
						<FaJsSquare />
						<FaNodeJs />
					</div>
				}
			/>
			<Card
				linkProjeto="https://www.figma.com/design/j5V2lLkMvaBj4paCLMuO0q/Recycle-Ecology-aplicativo?%20%20%20%20%20%20%20%20%20%20%20%20m=auto&t=BYEtO2oW52ksOpcC-1"
				linkImg="https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570943/recycle-card_onlqvx.jpg"
				title="Recycle Ecology"
				description="Aplicação para incentivar a reciclagem e conscientização ambiental."
				icons={
					<div className="flex gap-3 text-xl mb-3">
						<FaFigma />
					</div>
				}
			/>
			<Card
				linkProjeto="https://www.figma.com/design/Z9jPdhmS9ZbBQQQ069BUYW/App-gestor-de-filas?%20%20%20%20%20%20%20%20%20%20%20%20%20%20m=auto&t=QOxXndDzC64ielbQ-6"
				linkImg="https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570945/app-fila-card_rrkrft.jpg"
				title="Hora Marcada"
				description="Sistema de agendamento para otimizar filas e atendimento."
				icons={
					<div className="flex gap-3 text-xl mb-3">
						<FaFigma />
					</div>
				}
			/>
			<Card
				linkProjeto="https://conversor-de-moedas-tau.vercel.app/"
				linkImg="https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570944/Conversor-de-moedas_slqqe6.png"
				title="Conversor de Moedas"
				description="Ferramenta para conversão de moedas em tempo real com atualização de taxas."
				icons={
					<div className="flex gap-3 text-xl mb-3">
						<FaHtml5 />
						<FaCss3Alt />
						<FaJsSquare />
					</div>
				}
			/>
			<Card
				linkProjeto="https://todo-list-eta-vert.vercel.app/"
				linkImg="https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570943/todo-list_inrr7o.png"
				title="Todo-list"
				description="Aplicação para gerenciamento de tarefas com funcionalidades de organização."
				icons={
					<div className="flex gap-3 text-xl mb-3">
						<FaHtml5 />
						<FaCss3Alt />
						<FaJsSquare />
					</div>
				}
			/>
			<Card
				linkProjeto="https://nature-ecomerce.vercel.app/"
				linkImg="https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570945/nature-ecomerce_j5cbwq.png"
				title="Nature E-commerce"
				description="Loja virtual focada em produtos sustentáveis e ecológicos."
				icons={
					<div className="flex gap-3 text-xl mb-3">
						<FaHtml5 />
						<FaCss3Alt />
						<FaJsSquare />
					</div>
				}
			/>
			<Card
				linkProjeto="https://notes-react-orpin.vercel.app/"
				linkImg="https://res.cloudinary.com/dbwz36bcf/image/upload/v1740570943/voice-notes_udcywa.png"
				title="Voice Notes"
				description="Bloco de notas usando api de voz"
				icons={
					<div className="flex gap-3 text-xl mb-3">
						<FaReact />
					</div>
				}
			/>
		</div>
	);
}
