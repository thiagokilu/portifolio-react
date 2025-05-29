import { JSX } from "react";

interface CardProps {
	linkProjeto: string;
	linkImg: string;
	title: string;
	description: string;
	icons: JSX.Element;
}

export function BigCard({
	linkProjeto,
	linkImg,
	title,
	description,
	icons,
}: CardProps) {
	return (
		<div
			className="dark:bg-[#334155] group relative w-full max-w-[600px] overflow-hidden rounded-2xl 
        shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
		>
			<a href={linkProjeto} target="_blank" rel="noopener noreferrer">
				<div className="overflow-hidden w-full h-64">
					<img
						src={linkImg}
						alt={title}
						className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
					/>
				</div>
				<div className="p-6 flex flex-col gap-3">
					<div className="flex justify-between items-center">
						<h3 className="text-xl font-semibold">{title}</h3>
						<div className="flex gap-3 text-xl">{icons}</div>
					</div>
					<p>{description}</p>
				</div>
			</a>
		</div>
	);
}
