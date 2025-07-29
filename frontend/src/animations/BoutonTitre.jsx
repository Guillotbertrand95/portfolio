import React from "react";
import "../styles/BoutonTitre.scss"; // On met le style dans ce fichier

const BoutonStylé = ({ children, href }) => {
	return (
		<a
			href={href}
			className="btn-shine projet-button"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span>{children}</span>
		</a>
	);
};

export default BoutonStylé;
