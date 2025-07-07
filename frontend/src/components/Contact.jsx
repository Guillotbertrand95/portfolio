import React, { useState } from "react";
import "../styles/Contact.scss";
import {
	TextField,
	Button,
	Box,
	Typography,
	Snackbar,
	CircularProgress,
} from "@mui/material";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const [feedback, setFeedback] = useState("");
	const [loading, setLoading] = useState(false);
	const [openSnackbar, setOpenSnackbar] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.sendForm(
				"service_ok71czq",
				"template_1epkq9b",
				e.target,
				"DPouPY1uf7B1KYyX6"
			)
			.then(
				() => {
					setFeedback("✅ Message envoyé avec succès !");
					setOpenSnackbar(true);
					e.target.reset();
				},
				(error) => {
					setFeedback("❌ Erreur lors de l'envoi : " + error.text);
					setOpenSnackbar(true);
				}
			)
			.finally(() => setLoading(false));
	};

	return (
		<div className="contact-form-container">
			<Box component="form" onSubmit={sendEmail} className="contact-form">
				<Typography variant="h5" mb={2} textAlign="center">
					Formulaire de contact
				</Typography>
				<TextField
					className="input-nom"
					placeholder="Nom"
					name="user_name"
					required
					fullWidth
					margin="normal"
				/>
				<TextField
					className="input-email"
					placeholder="Email"
					type="email"
					name="user_email"
					required
					fullWidth
					margin="normal"
				/>
				<TextField
					className="input-message"
					placeholder="Message"
					name="message"
					required
					multiline
					rows={4}
					fullWidth
					margin="normal"
				/>
				<Button
					className="input-button"
					type="submit"
					variant="contained"
					color="primary"
					fullWidth
					sx={{ mt: 2 }}
					disabled={loading}
				>
					{loading ? <CircularProgress size={24} /> : "Envoyer"}
				</Button>
				<Snackbar
					open={openSnackbar}
					autoHideDuration={6000}
					onClose={() => setOpenSnackbar(false)}
					message={feedback}
					anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				/>
			</Box>
		</div>
	);
};

export default ContactForm;
