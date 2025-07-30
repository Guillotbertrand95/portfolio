import React, { useEffect, useRef, useState } from "react";
import CardVeille from "./CardVeille.jsx";
import "../styles/Veilles.scss";

const Veilles = () => {
	const sectionRef = useRef(null);
	const [feeds, setFeeds] = useState([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/rss`)
			.then((res) => res.json())
			.then((data) => {
				const limitedFeeds = data.map((flux) => flux.items[0]);
				const cleaned = limitedFeeds.map((item) => ({
					titre: item.title,
					description:
						item.contentSnippet?.slice(0, 150) + "..." ||
						"Pas de description",
					lien: item.link,
					imageUrl:
						item.enclosure?.url ||
						(item.content &&
							item.content.match(/<img.+?src="(.+?)"/)?.[1]) ||
						"https://placehold.co/300x200?text=No+Image",
				}));
				setFeeds(cleaned);
			})
			.catch((err) => console.error("Erreur fetch flux RSS :", err));
	}, []);

	useEffect(() => {
		if (!sectionRef.current || feeds.length === 0) return;

		const timeoutId = setTimeout(async () => {
			const targets = sectionRef.current.querySelectorAll(".card");
			console.log("🎯 Éléments à animer :", targets);

			if (!targets.length) {
				console.warn("⚠️ Aucun élément .card à animer !");
				return;
			}

			// ✅ Lazy import correct
			const module = await import("../animations/animation");
			if (module.lazyAnimateStagger) {
				await module.lazyAnimateStagger(targets, { withScroll: true });
			} else {
				console.warn(
					"❌ lazyAnimateStagger non trouvé dans animation.js"
				);
			}

			// ✅ ScrollTrigger refresh
			const { ScrollTrigger } = await import("gsap/ScrollTrigger");
			ScrollTrigger.refresh();
		}, 100);

		return () => clearTimeout(timeoutId);
	}, [feeds]);

	return (
		<section id="Veilles" className="veilles" ref={sectionRef}>
			<h2>Veille Technologique</h2>
			<div className="liste-veilles">
				{feeds.map(({ titre, description, lien, imageUrl }, index) => (
					<CardVeille
						key={index}
						titre={titre}
						description={description}
						lien={lien}
						backgroundIndex={index}
					/>
				))}
			</div>
		</section>
	);
};

export default Veilles;
