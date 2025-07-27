import { lazy, Suspense } from "react";

import Header from "./components/Header";
import BackgroundMouse from "./animations/BackgroundMouse";
import Accueil from "./components/Accueil";
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/main.scss";
import BackgroundStatic from "./animations/BackgroundMouse";

// Lazy loaded components
const Navbar = lazy(() => import("./components/Navbar"));
const Projets = lazy(() => import("./components/Projets"));
const Veilles = lazy(() => import("./components/Veilles"));

function App() {
	return (
		<div>
			<BackgroundStatic>
				{" "}
				<Suspense fallback={<div>Chargement de la navigation...</div>}>
					<Navbar />
				</Suspense>
				<div className="main-G">
					<main className="p-8 space-y-20 scroll-smooth">
						<section id="header">
							<Header />
						</section>
						<section id="accueil">
							<Accueil />
						</section>

						<section id="projets">
							<Suspense
								fallback={<div>Chargement des projets...</div>}
							>
								<Projets />
							</Suspense>
						</section>

						<section id="competences">
							<Competences />
						</section>

						<section id="veilles">
							<Suspense
								fallback={<div>Chargement des veilles...</div>}
							>
								<Veilles />
							</Suspense>
						</section>

						<section id="contact">
							<Contact />
						</section>

						<section>
							<Footer />
						</section>
					</main>
				</div>
			</BackgroundStatic>
		</div>
	);
}

export default App;
