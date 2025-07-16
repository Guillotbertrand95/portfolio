import React, { useEffect, useRef } from "react";
import CardProjet from "./CardProjet";
import { staggerOnScroll } from "../animations/animation";
import "../styles/Projets.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import agentIa from "../assets/agentia.png";
import react from "../assets/react.png";
import DevOps from "../assets/devops.png";
import API from "../assets/api.png";
import ourSolution from "../assets/oursolution.png";
import devemloperAct from "../assets/developeract.png";

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
		lien: "#",
		description: "Mon site perso en React",
	},
	{
		titre: "Développer",
		image: devemloperAct,
		lien: "#",
		description: "Mon site perso en React",
	},
	// Ajoute autant de projets que tu veux ici...
];

const Projets = () => {
	const sectionRef = useRef(null);

	useEffect(() => {
		if (!sectionRef.current) return;
		const targets = sectionRef.current.querySelectorAll(".card-Projet");

		staggerOnScroll(targets);

		ScrollTrigger.refresh();
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
							description={description} // si ta CardProjet gère la description
						/>
					)
				)}
			</div>
		</section>
	);
};

export default Projets;
