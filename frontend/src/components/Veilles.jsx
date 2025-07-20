import React, { useEffect, useRef } from "react";
import CardVeille from "./CardVeille.jsx";
import { staggerOnScroll } from "../animations/animation"; // ton helper GSAP
import "../styles/Veilles.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Veilles = () => {
	const sectionRef = useRef(null);

	useEffect(() => {
		if (!sectionRef.current) return;

		// On cible les éléments qui ont la classe .card
		const targets = sectionRef.current.querySelectorAll(".card");

		staggerOnScroll(targets);
		ScrollTrigger.refresh();
	}, []);

	return (
		<section id="Veilles" className="veilles" ref={sectionRef}>
			<h2>Veille Technologique</h2>

			<div className="liste-veilles">
				<CardVeille
					titre="React avancé"
					description="Comprendre les hooks personnalisés et la gestion d'état avec Redux Toolkit."
					lien="https://react.dev"
				/>
				<CardVeille
					titre="CI/CD avec GitHub Actions"
					description="Automatiser les déploiements avec GitHub Actions, Netlify et Docker."
					lien="https://docs.github.com/en/actions"
				/>
				<CardVeille
					titre="Sécurité Web"
					description="Principales attaques (XSS, CSRF, etc.) et stratégies de mitigation."
					lien="https://owasp.org"
				/>
			</div>
		</section>
	);
};

export default Veilles;
