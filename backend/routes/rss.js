// routes/rss.js
import express from "express";
import Parser from "rss-parser";
import NodeCache from "node-cache";

const router = express.Router();
const parser = new Parser();
const cache = new NodeCache({ stdTTL: 7200 }); // 2h

// Tes flux RSS
const flux = [
	"https://www.zataz.com/feed/",
	"https://feeds.feedburner.com/DeveloppezCom",
	"https://feeds.feedburner.com/TheHackersNews",
	"https://devops.com/feed/",
	"https://javascriptweekly.com/rss",

	"https://hacks.mozilla.org/feed/",
];

router.get("/", async (req, res) => {
	try {
		// 1️⃣ Vérifie le cache
		const cachedData = cache.get("rssData");
		if (cachedData) {
			console.log("✅ Données RSS depuis le cache");
			return res.json(cachedData);
		}

		console.log("⏳ Récupération des flux RSS...");

		const results = [];

		for (const url of flux) {
			try {
				const feed = await parser.parseURL(url);
				console.log(`✅ Flux chargé : ${url}`);
				results.push({
					source: url,
					title: feed.title || "Titre non trouvé",
					items: feed.items?.slice(0, 6) || [],
				});
			} catch (err) {
				console.warn(`⚠️ Erreur flux ${url} : ${err.message}`);
				// On renvoie toujours un objet même si le flux plante
				results.push({ source: url, title: "Erreur flux", items: [] });
			}
		}

		// 2️⃣ Mise en cache
		cache.set("rssData", results);
		console.log("💾 Données mises en cache");

		res.json(results);
	} catch (error) {
		// On capture absolument tout
		console.error("❌ Erreur inattendue dans /api/rss :", error);
		res.json([{ source: "erreur", title: "Erreur serveur", items: [] }]);
	}
});

export default router;
