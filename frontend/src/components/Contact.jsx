import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.scss"; // si tu as du style

const Contact = () => {
	const formRef = useRef();
	const [messageSent, setMessageSent] = useState(false);
	const [error, setError] = useState(null);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					setMessageSent(true);
					setError(null);
					e.target.reset(); // reset form
				},
				(error) => {
					console.error(error.text);
					setError("Une erreur est survenue lors de l’envoi.");
				}
			);
	};

	return (
		<div className="contact-container">
			<h2>Contactez-moi</h2>

			<form ref={formRef} onSubmit={sendEmail}>
				<label>Nom :</label>
				<input type="text" name="user_name" required />

				<label>Email :</label>
				<input type="email" name="user_email" required />

				<label>Message :</label>
				<textarea name="message" required></textarea>

				<button type="submit">Envoyer</button>
			</form>

			{messageSent && (
				<p className="success">✅ Message envoyé avec succès !</p>
			)}
			{error && <p className="error">❌ {error}</p>}
		</div>
	);
};

export default Contact;
