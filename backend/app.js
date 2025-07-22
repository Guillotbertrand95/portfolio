import express from "express";
import cors from "cors";
import rssRoutes from "./routes/rss.js"; // ✅ Corrige le chemin

const app = express();
app.use(cors());
app.use("/api/rss", rssRoutes); // ✅ Corrige la syntaxe de la route

export default app;
