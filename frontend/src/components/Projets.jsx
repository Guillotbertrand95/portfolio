import React, { useEffect, useRef } from "react";
import CardProjet from "./CardProjet";
import { staggerOnScroll } from "../animations/animation";
import "../styles/Projets.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projets = () => {
	const sectionRef = useRef(null);

	useEffect(() => {
		if (!sectionRef.current) return; // ✅ protection
		const targets = sectionRef.current.querySelectorAll(".card-Projet");

		staggerOnScroll(targets);

		ScrollTrigger.refresh(); // Forcer la mise à jour pour le scroll
	}, []);

	return (
		<section id="projets" className="projets" ref={sectionRef}>
			<h2>Mes Projets</h2>
			<div className="liste-projets">
				<CardProjet
					titre="Portfolio"
					description="Site perso React"
					lien="#"
				/>
				<CardProjet
					titre="Portfolio"
					description="Site perso React"
					lien="#"
				/>
				<CardProjet
					titre="Portfolio"
					description="Site perso React"
					lien="#"
				/>
				<CardProjet
					titre="Portfolio"
					description="Site perso React"
					lien="#"
				/>
				<CardProjet
					titre="Portfolio"
					description="Site perso React"
					lien="#"
				/>
				<CardProjet
					titre="Portfolio"
					description="Site perso React"
					lien="#"
				/>
			</div>
		</section>
	);
};

export default Projets;
