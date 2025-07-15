import React from "react";
import "../styles/CardAccueil.scss";

const CardAccueil = ({ logo, titre, onClick }) => {
	return (
		<div
			className="card-Accueil"
			onClick={onClick}
			style={{ cursor: "pointer" }}
		>
			{logo && <img src={logo} alt="logo" className="card-logo" />}
			{titre && <h3>{titre}</h3>}
		</div>
	);
};

export default CardAccueil;
