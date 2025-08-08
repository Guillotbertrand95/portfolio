import express from "express";
import cors from "cors";
import rssRoutes from "./routes/rss.js"; // Assure-toi que ce chemin est correct

const app = express();

// Liste des origines autorisées (pour le frontend)
const allowedOrigins = [
	"http://localhost:5173", // pour développement local
	"https://portfolio-eta-eight-62.vercel.app/", // remplace par ton vrai domaine Vercel
];

// Middleware CORS sécurisé
app.use(
	cors({
		origin: function (origin, callback) {
			// Autoriser les outils comme Postman qui n'envoient pas d'origine
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error(`CORS error: Origin ${origin} not allowed`));
			}
		},
		credentials: true, // si tu veux autoriser les cookies (sinon tu peux mettre false)
	})
);

// Pour parser les requêtes JSON
app.use(express.json());

// Route vers tes flux RSS
app.use("/api/rss", rssRoutes);

export default app;
