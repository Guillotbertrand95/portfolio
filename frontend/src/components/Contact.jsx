import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
	Typography,
	TextField,
	Button,
	CircularProgress,
	Snackbar,
} from "@mui/material";
import contactGif from "../assets/Mail.gif"; // remplace le chemin si besoin
import "../styles/Contact.scss"; // important pour que le style soit appliqué

const ContactForm = () => {
	const [loading, setLoading] = useState(false);
	const [openSnackbar, setOpenSnackbar] = useState(false);
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
					console.log("Résultat EmailJS :", result);
					setFeedback("Message envoyé avec succès !");
					form.current.reset(); // Vide le formulaire après envoi
				},
				(error) => {
					console.error("Erreur EmailJS :", error);
					setFeedback("Erreur lors de l'envoi du message.");
				}
			)
			.finally(() => {
				setLoading(false);
				setOpenSnackbar(true);
			});
	};

	return (
		<div className="contact-section">
			<div className="contact-image">
				<img src={contactGif} alt="Animation contact" />
			</div>

			<div className="contact-form-container">
				<form onSubmit={sendEmail} ref={form} className="contact-form">
					<Typography
						className="contact-title"
						variant="h5"
						mb={2}
						textAlign="center"
					>
						Formulaire de contact
					</Typography>

					<div className="contact-form-columns">
						<div className="left-column">
							<TextField
								placeholder="Nom"
								name="user_name"
								required
								fullWidth
								margin="normal"
							/>
							<TextField
								placeholder="Email"
								type="email"
								name="user_email"
								required
								fullWidth
								margin="normal"
							/>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								fullWidth
								disabled={loading}
							>
								{loading ? (
									<CircularProgress size={24} />
								) : (
									"Envoyer"
								)}
							</Button>
						</div>

						<div className="right-column">
							<TextField
								placeholder="Message"
								name="message"
								required
								multiline
								rows={8}
								fullWidth
								margin="normal"
							/>
						</div>
					</div>

					<Snackbar
						open={openSnackbar}
						autoHideDuration={6000}
						onClose={() => setOpenSnackbar(false)}
						message={feedback}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "center",
						}}
					/>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
