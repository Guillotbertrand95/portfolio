import React from "react";

const CardAccueil = ({ titre, description, lien }) => {
	return (
		<div className="card-Accueil">
			<h3>{titre}</h3>
			<p>{description}</p>
			<a href={lien} target="_blank" rel="noopener noreferrer">
				Voir le projet
			</a>
		</div>
	);
};

export default CardAccueil;
