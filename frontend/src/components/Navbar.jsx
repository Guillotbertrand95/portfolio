import { useState, useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import "../styles/Navbar.scss"; // adapte le chemin selon ta structure

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef(null);

	// Refs pour chaque lien
	const linksRef = useRef([]);

	useEffect(() => {
		function handleClickOutside(event) {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setMenuOpen(false);
			}
		}

		if (menuOpen) {
			document.addEventListener("mousedown", handleClickOutside);

			// 🔥 Animation GSAP : apparition des liens
			gsap.fromTo(
				linksRef.current,
				{ y: 20, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					stagger: 0.1,
					duration: 0.5,
					ease: Power3.easeOut,
				}
			);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuOpen]);

	return (
		<>
			{!menuOpen && (
				<button
					className="navbar-button"
					onClick={() => setMenuOpen(true)}
				>
					Menu
				</button>
			)}

			{menuOpen && (
				<nav ref={menuRef} className="navbar-menu">
					<a href="#accueil" ref={(el) => (linksRef.current[0] = el)}>
						Accueil
					</a>
					<a href="#projets" ref={(el) => (linksRef.current[1] = el)}>
						Projets
					</a>
					<a
						href="#competences"
						ref={(el) => (linksRef.current[2] = el)}
					>
						Compétences
					</a>
					<a href="#veilles" ref={(el) => (linksRef.current[4] = el)}>
						Veilles
					</a>
					<a href="#contact" ref={(el) => (linksRef.current[3] = el)}>
						Contact
					</a>
				</nav>
			)}
		</>
	);
}
