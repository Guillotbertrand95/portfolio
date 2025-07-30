import React, { useState, useEffect } from "react";
import SkillLogo from "../animations/SkillLogo.jsx";
import SkillCarousel from "../animations/SkillCarousel.jsx";
import "../styles/Competences.scss";

const Competences = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 768);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

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
