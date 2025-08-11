import express from "express";
import Parser from "rss-parser";
import NodeCache from "node-cache";

const router = express.Router();
const parser = new Parser();

const cache = new NodeCache({ stdTTL: 7200 }); // 2 heures en secondes

// Cache mémoire : 2 heures (7200 secondes)
const flux = [
	"https://openclassrooms.com/fr/blog/rss.xml",
	"https://www.zataz.com/feed/",
	"https://feeds.feedburner.com/DeveloppezCom",
	"https://www.journaldunet.com/rss.xml",
	"https://www.cybersecurity-insiders.com/feed/",
	"https://hacks.mozilla.org/feed/",
];

router.get("/", async (req, res) => {
	try {
		// Vérifie si les données sont déjà en cache
		const cachedData = cache.get("rssData");
		if (cachedData) {
			console.log("✅ Données RSS servies depuis le cache");
			return res.json(cachedData);
		}

		console.log("⏳ Récupération des flux RSS en ligne...");
		const results = [];

		for (const url of flux) {
			const feed = await parser.parseURL(url);
			results.push({
				source: url,
				title: feed.title,
				items: feed.items.slice(0, 6), // On limite à 6 articles
			});
		}

		// Stocke en cache pour 2h
		cache.set("rssData", results);

		console.log("💾 Données RSS mises en cache");
		res.json(results);
	} catch (error) {
		console.error("❌ Erreur lors du parsing RSS:", error);
		res.status(500).json({ error: "Erreur serveur" });
	}
});

export default router;
