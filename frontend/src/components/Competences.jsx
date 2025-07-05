import React, { useEffect, useRef } from "react";
import CardCompetences from "./CardCompetences.jsx";
import { staggerOnScroll } from "../animations/animation"; // le helper avec GSAP + ScrollTrigger
import "../styles/Competences.scss";

const Competences = () => {
	const sectionRef = useRef(null);

	useEffect(() => {
		const targets = sectionRef.current.querySelectorAll(".card-competence");

		staggerOnScroll(targets);
	}, []);

	return (
		<section id="competences" className="competences" ref={sectionRef}>
			<h2>Mes Compétences</h2>
			<div className="liste-competences">
				<CardCompetences
					titre="Portfolio"
					description="Site perso React"
					lien="#"
				/>
				<CardCompetences
					titre="Portfolio"
					description="Site perso React"
					lien="#"
				/>
				<CardCompetences
					titre="Portfolio"
					description="Site perso React"
					lien="#"
				/>
				<CardCompetences
					titre="Portfolio"
					description="Site perso React"
					lien="#"
				/>
			</div>
		</section>
	);
};

export default Competences;
