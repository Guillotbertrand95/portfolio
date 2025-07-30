import React, { useState, useEffect } from "react";
import "../styles/ModalCarousel.scss";
import tech4 from "../assets/tech4.webp"; // <-- import d'image ici

const slides = [
	{
		title: "GUILLOT Bertrand",
		content: "Développeur web full stack",
		image: tech4, // utilise l'import
	},
	{
		title: "Ma reconversion",
		content:
			"Après 15 ans derrière le bar à servir des cocktails, j’ai décidé de changer de verre et de me lancer dans le développement web. Aujourd’hui, je me spécialise dans le back-end, DevOps, et l’IA, avec la même rigueur et le même sens du service qu’à l’époque. Une reconversion motivée par la passion de la tech et l’envie constante d’apprendre.",
	},
	{
		title: "Mes objectifs futurs",
		content:
			"Concevoir des solutions performantes, scalables et sécurisées, en tirant parti des meilleures pratiques DevOps, de l’automatisation CI/CD, et des technologies cloud modernes. Mon objectif est d’optimiser l’intégration continue, améliorer la résilience des systèmes, et faciliter la collaboration entre équipes grâce à des outils robustes et évolutifs. Toujours à l’affût des innovations pour progresser et transmettre ces compétences.",
	},
];

const ModalCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [bgLoaded, setBgLoaded] = useState(false);

	useEffect(() => {
		// Réinitialiser au premier slide à chaque montage
		setCurrentIndex(0);
	}, []);
	useEffect(() => {
		if (currentIndex === 0 && !bgLoaded) {
			const img = new Image();
			img.src = slides[0].image;
			img.onload = () => setBgLoaded(true);
		}
	}, [currentIndex, bgLoaded]);

	const styleBackground =
		currentIndex === 0 && bgLoaded
			? {
					backgroundImage: `url(${slides[currentIndex].image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
			  }
			: {
					backgroundColor: "#50a2a7",
			  };

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
		<div className="modal-carousel" style={styleBackground}>
			<div className="modal-overlay"></div>
			<div className="modal-content">
				<h1 className={currentIndex === 0 ? "title-first-slide" : ""}>
					{slides[currentIndex].title}
				</h1>
				<p>{slides[currentIndex].content}</p>
			</div>

			<div className="modal-controls">
				<button
					onClick={prevSlide}
					aria-label="Slide précédente"
					className="button"
				>
					<div className="button-box">
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
