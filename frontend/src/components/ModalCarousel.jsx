import React, { useState } from "react";
import "../styles/ModalCarousel.scss";

const slides = [
	{
		title: "GUILLOT Bertrand",
		content: "Développeur web full stack",
	},
	{
		title: "Ma reconversion",
		content:
			"Après 15 ans dans la restauration, je me suis lancé dans le développement web, avec un focus sur le back-end, DevOps, et l'IA.",
	},
	{
		title: "Mes objectifs futurs",
		content:
			"Créer des solutions utiles, robustes et sécurisées, en mettant la tech au service de l'humain. Toujours apprendre et transmettre !",
	},
];

const ModalCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		setCurrentIndex((oldIndex) =>
			oldIndex === 0 ? slides.length - 1 : oldIndex - 1
		);
	};

	const nextSlide = () => {
		setCurrentIndex((oldIndex) =>
			oldIndex === slides.length - 1 ? 0 : oldIndex + 1
		);
	};

	return (
		<div className="modal-carousel">
			<div className="modal-content">
				<h1>{slides[currentIndex].title}</h1>
				<p>{slides[currentIndex].content}</p>
			</div>

			<div className="modal-controls">
				<button
					onClick={prevSlide}
					aria-label="Slide précédente"
					className="button"
				>
					<div className="button-box">
						{/* Exemple SVG ou forme pour le bouton précédent */}
						<svg
							className="button-elem"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								d="M9 6l6 6-6 6"
								stroke="currentColor"
								strokeWidth="2"
								fill="none"
							/>
						</svg>
					</div>
				</button>

				<div className="indicator">
					{slides.map((_, i) => (
						<span
							key={i}
							className={i === currentIndex ? "active" : ""}
							onClick={() => setCurrentIndex(i)}
							aria-label={`Aller au slide ${i + 1}`}
							role="button"
							tabIndex={0}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ")
									setCurrentIndex(i);
							}}
						>
							●
						</span>
					))}
				</div>

				<button
					onClick={nextSlide}
					aria-label="Slide suivante"
					className="button"
				>
					<div className="button-box">
						{/* Exemple SVG ou forme pour le bouton suivant */}
						<svg
							className="button-elem"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								d="M15 18l-6-6 6-6"
								stroke="currentColor"
								strokeWidth="2"
								fill="none"
							/>
						</svg>
					</div>
				</button>
			</div>
		</div>
	);
};

export default ModalCarousel;
