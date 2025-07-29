import React from "react";
import "../styles/CardVeille.scss";
import tech1 from "../assets/tech1.webp"; // <-- ici on importe l'image locale
import tech2 from "../assets/tech2.webp";
import tech3 from "../assets/tech3.webp";

const backgrounds = [
	tech1, // maintenant c'est une vraie URL gérée par Webpack/Vite
	tech2,
	tech3,
];

const CardVeille = ({ titre, description, lien, backgroundIndex }) => {
	const backgroundImage = backgrounds[backgroundIndex % backgrounds.length];

	return (
		<div
			className="card card-veille"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<b></b>
			<div className="content">
				<div className="header-row">
					<h3 className="title">{titre}</h3>
					<a
						href={lien}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Voir l'article ${titre}`}
						className="button"
					></a>
				</div>

				<p className="description">{description}</p>
			</div>
		</div>
	);
};

export default CardVeille;
