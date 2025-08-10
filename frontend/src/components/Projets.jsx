import React, { useLayoutEffect, useRef } from "react";
import CardProjet from "./CardProjet";
import "../styles/Projets.scss";

import agentIa from "../assets/agentia.webp";
import react from "../assets/react.webp";
import DevOps from "../assets/devops.webp";
import API from "../assets/api.webp";
import ourSolution from "../assets/oursolution.webp";
import devemloperAct from "../assets/developeract.webp";

const projetsData = [
	{
		titre: "Projet IA",
		image: agentIa,
		lien: "https://exemple.com",
		description: "Un projet d'intelligence artificielle super cool",
	},
	{
		titre: "React",
		image: react,
		lien: "https://kasa-bertrand.netlify.app/",
		description: "Mon site perso en React",
	},
	{
		titre: "DevOps",
		image: DevOps,
		lien: "#",
		description: "Mon site perso en React",
	},
	{
		titre: "API",
		image: API,
		lien: "#",
		description: "Mon site perso en React",
	},
	{
		titre: "Our-Solution",
		image: ourSolution,
		lien: "https://github.com/Guillotbertrand95/startCLI",
		description: "Mon site perso en React",
	},
	{
		titre: "Développer",
		image: devemloperAct,
		lien: "#",
		description: "Mon site perso en React",
	},
];

const Projets = () => {
	const sectionRef = useRef(null);

	useLayoutEffect(() => {
		if (!sectionRef.current) return;

		const timeoutId = setTimeout(async () => {
			const targets = sectionRef.current.querySelectorAll(".card-Projet");
			if (!targets.length) return;

			const { lazyAnimateStagger } = await import(
				"../animations/animation.jsx"
			);
			lazyAnimateStagger(targets, { withScroll: true });
		}, 100);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<section id="Projets" className="projets" ref={sectionRef}>
			<h2>Mes Projets</h2>
			<div className="liste-projets">
				{projetsData.map(
					({ titre, image, lien, description }, index) => (
						<CardProjet
							key={index}
							titre={titre}
							image={image}
							lien={lien}
							description={description}
						/>
					)
				)}
			</div>
		</section>
	);
};

export default Projets;
