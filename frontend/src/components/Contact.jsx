import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.scss";
import ContactLogosS from "./ContactLogosS.jsx"; // adapte le chemin si besoin
const ContactForm = () => {
	const [loading, setLoading] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const [feedback, setFeedback] = useState("");
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log("EmailJS:", result);
					setFeedback("Message envoyé avec succès !");
					form.current.reset();
				},
				(error) => {
					console.log("erreur");
					console.error("Erreur EmailJS:", error);
					setFeedback("Erreur lors de l'envoi du message.");
				}
			)
			.finally(() => {
				setLoading(false);
				setShowMessage(true);
				setTimeout(() => setShowMessage(false), 6000);
			});
	};

	return (
		<section id="Contact" className="contact">
			<h2> Contact </h2>
			<div className="contact-form-container">
				<form onSubmit={sendEmail} ref={form} className="contact-form">
					<h2 className="contact-title">Formulaire de contact</h2>

					<div className="contact-form-columns">
						<div className="left-column">
							<input
								type="text"
								name="user_name"
								placeholder="Nom"
								required
							/>
							<input
								type="email"
								name="user_email"
								placeholder="Email"
								required
							/>
							<div className="right-column">
								<textarea
									name="message"
									placeholder="Message"
									rows="8"
									required
								></textarea>
							</div>
							<button type="submit" disabled={loading}>
								{loading ? (
									<span className="loader" />
								) : (
									"Envoyer"
								)}
							</button>
						</div>
					</div>

					{showMessage && (
						<div className="notification">{feedback}</div>
					)}
				</form>
				<ContactLogosS />
			</div>
		</section>
	);
};

export default ContactForm;
