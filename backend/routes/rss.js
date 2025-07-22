import express from "express";
import Parser from "rss-parser";

const router = express.Router();
const parser = new Parser();

const flux = [
	"https://www.journalduhacker.net/rss",
	"https://www.zataz.com/feed/",
	"https://feeds.feedburner.com/DeveloppezCom",
];

router.get("/", async (req, res) => {
	try {
		const results = [];

		for (const url of flux) {
			const feed = await parser.parseURL(url);
			results.push({
				source: url,
				title: feed.title,
				items: feed.items.slice(0, 5),
			});
		}

		res.json(results);
	} catch (error) {
		console.error("Erreur lors du parsing RSS:", error);
		res.status(500).json({ error: "Erreur serveur" });
	}
});

export default router;
