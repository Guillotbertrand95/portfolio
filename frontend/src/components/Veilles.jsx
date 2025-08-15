import React, { useEffect, useRef, useState } from "react";
import CardVeille from "./CardVeille.jsx";
import "../styles/Veilles.scss";

const Veilles = () => {
	const sectionRef = useRef(null);
	const [feeds, setFeeds] = useState([]);
	const [loading, setLoading] = useState(true);
	const [refreshing, setRefreshing] = useState(false);

	useEffect(() => {
		setLoading(true);
		setFeeds([]); // réinitialise à chaque load
		const controller = new AbortController();

		fetch(`${import.meta.env.VITE_API_URL}/api/rss`, {
			signal: controller.signal,
		})
			.then((res) => res.json())
			.then((data) => {
				if (!Array.isArray(data)) return;

				data.forEach((flux) => {
					if (
						flux &&
						Array.isArray(flux.items) &&
						flux.items.length > 0
					) {
						const item = flux.items[0];
						const cleanedItem = {
							titre: item?.title || "Titre indisponible",
							description:
								item?.contentSnippet?.slice(0, 150) + "..." ||
								"Pas de description",
							lien: item?.link || "#",
							imageUrl:
								item?.enclosure?.url ||
								(item?.content &&
									item.content.match(
										/<img.+?src="(.+?)"/
									)?.[1]) ||
								"https://placehold.co/300x200?text=No+Image",
						};
						// Ajoute chaque article dès qu'il est prêt
						setFeeds((prev) => [...prev, cleanedItem]);
					}
				});
			})
			.catch((err) => {
				if (err.name !== "AbortError") {
					console.error("Erreur fetch flux RSS :", err);
				}
			})

			.finally(() => setLoading(false));

		return () => controller.abort(); // annule si le composant est démonté
	}, []);

	return (
		<section id="Veilles" className="veilles" ref={sectionRef}>
			<h2>Veille Technologique</h2>

			{loading && <p>Chargement des articles...</p>}
			{refreshing && !loading && <p>Mise à jour en arrière-plan...</p>}

			{!loading && feeds.length === 0 && (
				<p>Aucun article disponible pour le moment.</p>
			)}

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
