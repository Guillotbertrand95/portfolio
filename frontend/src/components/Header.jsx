import "../styles/Header.scss";
import Lottie from "lottie-react";

import gitAnimation from "../lotties/git.json";

export default function Accueil() {
	return (
		<>
			<div className="header-section">
				<h1 className="header-title">Bienvenue sur mon portfolio</h1>
				<a
					href="https://github.com/Guillotbertrand95"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="git-logo">
						<Lottie animationData={gitAnimation} loop={true} />
					</div>
				</a>
			</div>
		</>
	);
}
