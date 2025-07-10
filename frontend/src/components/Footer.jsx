import React from "react";
import Contact from "./Contact"; // ton formulaire Contact.jsx
import "../styles/Footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-contact">
				<div className="footer-bottom">
					<p>© {new Date().getFullYear()} - Tous droits réservés</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
