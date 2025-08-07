// components/BouttonG.jsx
import React from "react";
import "../styles/BouttonG.scss"; // Le fichier SCSS avec les bons styles

const BouttonG = ({ label, onClick, type = "button", className = "" }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`main-btn ${className}`}
		>
			{label}
		</button>
	);
};

export default BouttonG;
