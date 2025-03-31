import React from "react";
import { JSX } from "react";

interface CardProps {
	linkProjeto: string;
	linkImg: string;
	title: string;
	description: string;
	icons: JSX.Element;
}

export function Card({
	linkProjeto,
	linkImg,
	title,
	description,
	icons,
}: CardProps) {
	return (
		<div className="dark:bg-[#334155] group relative w-[300px] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 sm:flex sm:flex-col sm:items-center sm:justify-center sm:text-center lg:w-96">
			<a href={linkProjeto} target="_blank" rel="noopener noreferrer">
				<div className="overflow-hidden">
					<img
						src={linkImg}
						alt={title}
						className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
						width={400}
						height={400}
					/>
				</div>
				<div className="p-6 flex flex-col items-start">
					<div className="flex justify-between w-full">
						<h3 className="text-xl font-semibold mb-2">{title}</h3>
						<div className="flex gap-3 text-xl mb-3">{icons}</div>
					</div>
					<p>{description}</p>
				</div>
			</a>
		</div>
	);
}
