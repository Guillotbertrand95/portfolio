import React, { useEffect, useRef, useState } from "react";
import "../styles/CardProjet.scss";

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
			<h3 className="card-titre">{titre}</h3>
			<div
				className="image-wrapper"
				style={{
					backgroundImage: isVisible ? `url(${image})` : "none",
					minHeight: "200px", // à adapter pour éviter le saut de layout
				}}
			>
				<div className="overlay">
					<a
						href={lien}
						className="projet-button"
						target="_blank"
						rel="noopener noreferrer"
					></a>
				</div>
			</div>
		</div>
	);
};

export default CardProjet;
