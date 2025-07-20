import React, { useEffect, useRef } from "react";
import SkillLogo from "../animations/SkillLogo.jsx"; // ton composant logo
import { staggerOnScroll } from "../animations/animation"; // animation GSAP
import "../styles/Competences.scss";
import "../styles/SkillLogo.scss";

const Competences = () => {
	const sectionRef = useRef(null);

	useEffect(() => {
		if (!sectionRef.current) return;
		const targets = sectionRef.current.querySelectorAll(".skill-logo");

		staggerOnScroll(targets);
	}, []);

	return (
		<section id="Competences" className="competences" ref={sectionRef}>
			<h2>Mes Compétences</h2>
			<div className="liste-competences">
				<SkillLogo name="React" />

				{/* ajoute ici tous les logos que tu veux */}
			</div>
		</section>
	);
};

export default Competences;
