import { useState, useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import "../styles/Header.scss";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef(null);
	const linksRef = useRef([]);
	const headerRef = useRef(null); // <--- Ici on crée le ref
	https: useEffect(() => {
		function handleClickOutside(event) {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target) &&
				!event.target.classList.contains("navbar-button")
			) {
				setMenuOpen(false);
			}
		}

		if (menuOpen) {
			document.addEventListener("mousedown", handleClickOutside);

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
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuOpen]);

	const navLinks = [
		{ href: "#accueil", label: "Accueil" },
		{ href: "#projets", label: "Projets" },
		{ href: "#competences", label: "Compétences" },
		{ href: "#veilles", label: "Veilles" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<>
			<header className="header-section" ref={headerRef}>
				<h1 className="header-title">Bienvenue sur mon Portfolio</h1>
				<button
					className="navbar-button"
					onClick={() => setMenuOpen(!menuOpen)}
					style={{ display: menuOpen ? "none" : "flex" }} // on masque quand menu ouvert
				>
					Menu
				</button>
			</header>

			{/* Navigation affichée en dessous du header */}
			<nav
				id="navbar-menu"
				ref={menuRef}
				className={`navbar-menu ${menuOpen ? "open" : ""}`}
			>
				{navLinks.map((link, index) => (
					<a
						key={index}
						href={link.href}
						ref={(el) => (linksRef.current[index] = el)}
						onClick={() => setMenuOpen(false)}
					>
						{link.label}
					</a>
				))}
			</nav>
		</>
	);
}
