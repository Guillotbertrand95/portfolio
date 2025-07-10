import React from "react";
import Skill from "../animations/Skill.jsx";
import htmlAnimation from "../lotties/html2.json"; // adapte le chemin
import "../styles/CardSkill.scss";
const CardSkill = () => {
	return (
		<div>
			<section className="skills-section">
				<div className="skills-grid">
					<Skill title="HTML5" animation={htmlAnimation} />
				</div>
			</section>
		</div>
	);
};

export default CardSkill;
