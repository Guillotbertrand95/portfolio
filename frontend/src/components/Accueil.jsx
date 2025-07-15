import React, { useEffect, useRef, useState } from "react";
import CardAccueil from "./CardAccueil";
import Modal from "./Modal";
import { staggerOnScroll } from "../animations/animation";
import "../styles/Accueil.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profilPhoto from "../assets/photo8.webp";

const aspirationsLogo =
	"https://cdn-icons-png.flaticon.com/512/1055/1055646.png";

const Accueil = () => {
	const sectionRef = useRef(null);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		if (!sectionRef.current) return;
		const targets = sectionRef.current.querySelectorAll(".card-Accueil");
		staggerOnScroll(targets);
		ScrollTrigger.refresh();
	}, []);

	const introText = `
    Après 15 ans dans la restauration, j’ai choisi de me reconvertir dans le développement web, avec une passion pour la technique.

    Je me spécialise en back-end et DevOps, avec un fort intérêt pour l’IA et la cybersécurité.

    Actuellement en formation, je développe des projets concrets comme un portfolio API, un assistant SEO, ou une API d’analyse émotionnelle pour les RH.

    🎯 Mon objectif : créer des solutions utiles, robustes et sécurisées, en mettant la tech au service de l’humain.
  `;

	const aspirationsText = `Contribuer à des projets utiles et humains. Allier DevOps, IA et cybersécurité pour améliorer le quotidien. Toujours apprendre, expérimenter, automatiser, et transmettre.`;

	return (
		<section id="Accueil" className="accueil" ref={sectionRef}>
			<h2>Accueil</h2>

			<div className="accueil-content">
				<div className="photo-profil">
					<img src={profilPhoto} alt="Photo de profil" />
				</div>
				<div className="liste-accueil">
					{/* Carte classique */}
					<CardAccueil titre="Présentation" description={introText} />

					{/* Ici, juste le logo (pas de carte) */}
					<div
						className="logo-simple"
						onClick={() => setModalOpen(true)}
						style={{ cursor: "pointer", width: "60px" }}
						title="Mes aspirations futures"
					>
						<img
							src={aspirationsLogo}
							alt="Logo aspirations"
							style={{ width: "100%", display: "block" }}
						/>
					</div>
				</div>
			</div>

			{/* Modale avec le contenu détaillé */}
			{modalOpen && (
				<Modal onClose={() => setModalOpen(false)}>
					<CardAccueil
						titre="Mes aspirations futures"
						description={aspirationsText}
					/>
				</Modal>
			)}
		</section>
	);
};

export default Accueil;
