import React, { useEffect, useRef } from "react";
import CardAccueil from "./CardAccueil";
import { staggerOnScroll } from "../animations/animation";
import "../styles/Accueil.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profilPhoto from "../assets/photo8.webp";

const Accueil = () => {
	const sectionRef = useRef(null);

	useEffect(() => {
		if (!sectionRef.current) return;
		const targets = sectionRef.current.querySelectorAll(".card-Accueil");

		staggerOnScroll(targets);

		ScrollTrigger.refresh();
	}, []);

	const introText = `
		Après 15 ans dans la restauration, j’ai choisi de me reconvertir dans le développement web, avec une passion pour la technique.

Je me spécialise en back-end et DevOps, avec un fort intérêt pour l’IA et la cybersécurité.

Actuellement en formation, je développe des projets concrets comme un portfolio API, un assistant SEO, ou une API d’analyse émotionnelle pour les RH.

🎯 Mon objectif : créer des solutions utiles, robustes et sécurisées, en mettant la tech au service de l’humain.


	`;

	return (
		<section id="accueil" className="accueil" ref={sectionRef}>
			<h2>Accueil</h2>

			<div className="accueil-content">
				{/* Photo de profil */}
				<div className="photo-profil">
					<img src={profilPhoto} alt="Photo de profil" />
				</div>
				<div className="liste-accueil">
					<CardAccueil
						titre="Présentation"
						description={introText}
						lien="#" // si tu veux un lien, sinon enlève
					/>
					<CardAccueil
						titre="Portfolio"
						description="Site perso React"
						lien="#"
					/>
				</div>
			</div>
		</section>
	);
};

export default Accueil;
