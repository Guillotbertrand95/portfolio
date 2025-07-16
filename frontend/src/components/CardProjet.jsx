import React from "react";
import "../styles/CardProjet.scss";

const CardProjet = ({ titre, image, lien }) => {
	return (
		<div className="card-Projet">
			<h3 className="card-titre">{titre}</h3>
			<div
				className="image-wrapper"
				style={{ backgroundImage: `url(${image})` }}
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
