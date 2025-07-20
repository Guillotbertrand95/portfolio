import React from "react";
import "../styles/CardVeille.scss"; // adapte le chemin si nécessaire

const CardVeille = ({ titre, description, lien, children }) => {
	return (
		<div className="card">
			<b></b>
			<div className="content">
				<h3 className="title">{titre}</h3>
				<p>{description}</p>
				<a href={lien} target="_blank" rel="noopener noreferrer">
					Voir le projet
				</a>
				{children}
			</div>
		</div>
	);
};

export default CardVeille;
