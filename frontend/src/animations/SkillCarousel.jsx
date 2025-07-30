import React, { useState } from "react";
import "../styles/SkillLogoS.scss";

const skills = [
	{ className: "devicon-javascript-plain colored", name: "JavaScript" },
	{ className: "devicon-react-original colored", name: "React" },
	{ className: "devicon-python-plain colored", name: "Python" },
	{ className: "devicon-css3-plain colored", name: "CSS" },
	{ className: "devicon-html5-plain colored", name: "HTML" },
	{ className: "devicon-git-plain colored", name: "Git" },
];

// Composant bouton flèche réutilisable
const ArrowButton = ({ onClick, direction = "left", label }) => {
	const rotate = direction === "right" ? "rotate(0deg)" : "rotate(180deg)";
	return (
		<button onClick={onClick} className="button" aria-label={label}>
			<div className="button-box" style={{ transform: rotate }}>
				<svg
					className="button-elem"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="9 18 15 12 9 6" />
				</svg>
			</div>
		</button>
	);
};

const SkillCarousel = () => {
	const [current, setCurrent] = useState(0);

	const prev = () => {
		setCurrent((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
	};
	const next = () => {
		setCurrent((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
	};

	const nextIndex = (current + 1) % skills.length;

	return (
		<div className="skill-carousel">
			<ArrowButton
				onClick={prev}
				direction="left"
				label="Compétence précédente"
			/>

			<div className="skill-slide-container">
				<div className="skill-slide fade-in">
					<i
						className={`${skills[current].className} skill-icon`}
					></i>
					<p className="skill-name">{skills[current].name}</p>
				</div>

				<div className="skill-slide fade-in">
					<i
						className={`${skills[nextIndex].className} skill-icon`}
					></i>
					<p className="skill-name">{skills[nextIndex].name}</p>
				</div>
			</div>

			<ArrowButton
				onClick={next}
				direction="right"
				label="Compétence suivante"
			/>
		</div>
	);
};

export default SkillCarousel;
