import React from "react";
import SkillLogo from "../animations/SkillLogo.jsx";
import SkillCarousel from "../animations/SkillCarousel.jsx";
import useIsMobile from "../hooks/useIsMobile";
import "../styles/Competence.scss";
const Competences = () => {
	const isMobile = useIsMobile(768);

	return (
		<section id="Competences" className="competences">
			<h2>Mes Compétences</h2>
			<div className="liste-competences">
				{isMobile ? <SkillCarousel /> : <SkillLogo />}
			</div>
		</section>
	);
};

export default Competences;
