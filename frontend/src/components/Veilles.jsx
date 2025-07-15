import React, { useEffect, useRef } from "react";
import CardVeille from "./CardVeille.jsx";
import { staggerOnScroll } from "../animations/animation"; // le helper avec GSAP + ScrollTrigger
import "../styles/Veilles.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Veilles = () => {
	const sectionRef = useRef(null);

	useEffect(() => {
		if (!sectionRef.current) return; // ✅ protection
		const targets = sectionRef.current.querySelectorAll(".cardVeille");

		staggerOnScroll(targets);

		ScrollTrigger.refresh(); // Forcer la mise à jour pour le scroll
	}, []);

	return (
		<section id="Veilles" className="veilles" ref={sectionRef}>
			<h2>Veilles Tech</h2>
			<div className="liste-veilles">
				<CardVeille
					titre="Portfolio"
					description="Site perso React"
					lien="#"
				/>
				<CardVeille
					titre="Portfolio"
					description="Site perso React"
					lien="#"
				/>
				<CardVeille
					titre="Portfolio"
					description="Site perso React"
					lien="#"
				/>
			</div>
		</section>
	);
};

export default Veilles;
