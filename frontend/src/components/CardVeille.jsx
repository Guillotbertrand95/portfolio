import React from "react";
import "../styles/CardVeille.scss"; // ← si tu l’as séparé

const CardVeille = ({ titre, description, lien }) => {
	return (
		<div className="cardVeille">
			<h3>{titre}</h3>
			<p>{description}</p>
			<a href={lien} target="_blank" rel="noopener noreferrer">
				Voir le projet
			</a>
		</div>
	);
};

export default CardVeille;
