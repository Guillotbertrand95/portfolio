import React, { useState } from "react";
import "../styles/SkillCarousel.scss";

const skills = [
	{ className: "devicon-javascript-plain colored", name: "JavaScript" },
	{ className: "devicon-react-original colored", name: "React" },
	{ className: "devicon-python-plain colored", name: "Python" },
	{ className: "devicon-css3-plain colored", name: "CSS" },
	{ className: "devicon-html5-plain colored", name: "HTML" },
	{ className: "devicon-git-plain colored", name: "Git" },
];

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
		<div
			className="skill-carousel"
			style={{ display: "flex", alignItems: "center", gap: "1rem" }}
		>
			{/* Bouton Précédent */}
			<button
				className="boutonC prev"
				onClick={prev}
				aria-label="Précédent"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					width="24"
					height="24"
				>
					<polyline points="9 18 15 12 9 6" />
				</svg>
			</button>

			{/* Contenu du carousel */}
			<div
				className="skill-slide-container"
				style={{ display: "flex", gap: "2rem" }}
			>
				<div
					className="skill-slide fade-in"
					style={{ textAlign: "center" }}
				>
					<i
						className={`${skills[current].className} skill-icon`}
						style={{ fontSize: "48px" }}
					></i>
					<p className="skill-name">{skills[current].name}</p>
				</div>
				<div
					className="skill-slide fade-in"
					style={{ textAlign: "center" }}
				>
					<i
						className={`${skills[nextIndex].className} skill-icon`}
						style={{ fontSize: "48px" }}
					></i>
					<p className="skill-name">{skills[nextIndex].name}</p>
				</div>
			</div>

			{/* Bouton Suivant */}
			<button
				className="boutonC next"
				onClick={next}
				aria-label="Suivant"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					width="24"
					height="24"
				>
					<polyline points="9 18 15 12 9 6" />
				</svg>
			</button>
		</div>
	);
};

export default SkillCarousel;
