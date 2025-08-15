import express from "express";
import cors from "cors";
import rssRoutes from "./routes/rss.js";

const app = express();

// Liste des origines autorisées
const allowedOrigins = [
	"http://localhost:5173",
	"https://portfolio-eta-eight-62.vercel.app",
];

app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error(`CORS error: Origin ${origin} not allowed`));
			}
		},
		credentials: true,
	})
);

app.use(express.json());

// Route RSS
app.use("/api/rss", rssRoutes);

export default app;
