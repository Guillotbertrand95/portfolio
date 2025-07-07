import React, { useEffect, useRef } from "react";
import CardAccueil from "./CardAccueil";
import { staggerOnScroll } from "../animations/animation";
import "../styles/Accueil.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Accueil = () => {
	const sectionRef = useRef(null); // déclaration de la ref
	useEffect(() => {
		if (!sectionRef.current) return; // ✅ protection
		const targets = sectionRef.current.querySelectorAll(".card-Accueil");

		staggerOnScroll(targets);

		ScrollTrigger.refresh(); // Forcer la mise à jour pour le scroll
	}, []);

	return (
		<section id="accueil" className="accueil" ref={sectionRef}>
			<h2>Accueil</h2>
			<div className="liste-accueil">
				<CardAccueil
					titre="Portfolio"
					description="Site perso React"
					lien="#"
				/>
			</div>
		</section>
	);
};

export default Accueil;
