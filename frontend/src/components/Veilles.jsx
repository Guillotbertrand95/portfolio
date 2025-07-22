import React, { useEffect, useRef, useState } from "react";
import CardVeille from "./CardVeille.jsx";
import { staggerOnScroll } from "../animations/animation";
import "../styles/Veilles.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Veilles = () => {
	const sectionRef = useRef(null);
	const [feeds, setFeeds] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/api/rss")
			.then((res) => res.json())
			.then((data) => {
				// On récupère seulement 1 item par flux pour avoir 3 cartes max
				const limitedFeeds = data.map((flux) => flux.items[0]); // 1er article de chaque
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

		const targets = sectionRef.current.querySelectorAll(".card");
		staggerOnScroll(targets); // Animation GSAP
		ScrollTrigger.refresh();
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
