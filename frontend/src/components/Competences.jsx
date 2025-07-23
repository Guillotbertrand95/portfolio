import React from "react";
import SkillLogo from "../animations/SkillLogo.jsx"; // Composant logo simple
import "../styles/Competences.scss";
import "../styles/SkillLogo.scss";

const Competences = () => {
	return (
		<section id="Competences" className="competences">
			<h2>Mes Compétences</h2>
			<div className="liste-competences">
				<SkillLogo />
			</div>
		</section>
	);
};

export default Competences;
