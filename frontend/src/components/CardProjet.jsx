import React, { useEffect, useRef, useState } from "react";
import "../styles/CardProjet.scss";
import BoutonStylé from "../animations/BoutonTitre.jsx";
const CardProjet = ({ titre, image, lien }) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (ref.current) observer.observe(ref.current);

		return () => observer.disconnect();
	}, []);

	return (
		<div className="card-Projet" ref={ref}>
			<div className="card-header">
				<BoutonStylé href={lien}>{titre}</BoutonStylé>
			</div>

			<div
				className="image-wrapper"
				style={{
					backgroundImage: isVisible ? `url(${image})` : "none",
					minHeight: "200px",
				}}
			>
				<div className="overlay" />
			</div>
		</div>
	);
};

export default CardProjet;
