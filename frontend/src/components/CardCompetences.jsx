import React from "react";

export default function CardCompetences({ titre, description, lien }) {
	return (
		<div className="card-competence">
			<h3>{titre}</h3>
			<p>{description}</p>
			<a href={lien} target="_blank" rel="noopener noreferrer">
				En savoir plus
			</a>
		</div>
	);
}
