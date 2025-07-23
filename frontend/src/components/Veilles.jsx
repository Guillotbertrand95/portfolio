import React, { useEffect, useRef, useState } from "react";
import CardVeille from "./CardVeille.jsx";
import { animateStagger } from "../animations/animation"; // <-- exactement ce nom !
import "../styles/Veilles.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Veilles = () => {
	const sectionRef = useRef(null);
	const [feeds, setFeeds] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/api/rss")
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
		if (!sectionRef.current) return;

		if (feeds.length === 0) return; // pas de données => pas d'animation

		const timeoutId = setTimeout(() => {
			const targets = sectionRef.current.querySelectorAll(".card");
			console.log("Éléments à animer:", targets);

			if (!targets.length) {
				console.warn("⚠️ Aucun élément .card à animer !");
				return;
			}

			animateStagger(targets, { withScroll: true });
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
