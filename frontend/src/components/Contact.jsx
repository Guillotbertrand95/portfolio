import React, { useState } from "react";
import {
	Box,
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

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);
		// simulation pour test
		setTimeout(() => {
			setLoading(false);
			setOpenSnackbar(true);
			setFeedback("Message envoyé avec succès !");
		}, 1500);
	};

	return (
		<div className="contact-section">
			<div className="contact-image">
				<img src={contactGif} alt="Animation contact" />
			</div>

			<div className="contact-form-container">
				<Box
					component="form"
					onSubmit={sendEmail}
					className="contact-form"
				>
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
				</Box>
			</div>
		</div>
	);
};

export default ContactForm;
