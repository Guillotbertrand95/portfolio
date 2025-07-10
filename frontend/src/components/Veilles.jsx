import React from "react";
import CardVeille from "./CardVeille.jsx";
import { useRef, useEffect } from "react";
import { staggerOnScroll } from "../animations/animation"; // le helper avec GSAP + ScrollTrigger
const Veilles = () => {
	const sectionRef = useRef(null);

	return (
		<div>
			<section id="veilles" className="veilles" ref={sectionRef}>
				<h2>Veilles Tech</h2>
				<div className="liste-veilles">
					<CardVeille
						titre="Portfolio"
						description="Site perso React"
						lien="#"
					/>
					<CardVeille
						titre="Portfolio"
						description="Site perso React"
						lien="#"
					/>
					<CardVeille
						titre="Portfolio"
						description="Site perso React"
						lien="#"
					/>
				</div>
			</section>
		</div>
	);
};

export default Veilles;
