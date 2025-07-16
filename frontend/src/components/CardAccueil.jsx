import React from "react";
import "../styles/CardAccueil.scss";

const CardAccueil = ({ logo, titre, description, onClick }) => {
	return (
		<div
			className="card-Accueil"
			onClick={onClick}
			style={{ cursor: onClick ? "pointer" : "default" }}
		>
			{logo && <img src={logo} alt="logo" className="card-logo" />}
			{titre && <h3>{titre}</h3>}
			{description && <p>{description}</p>}
		</div>
	);
};

export default CardAccueil;
