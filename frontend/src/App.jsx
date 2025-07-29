import { lazy, Suspense } from "react";

import Header from "./components/Header";

import Accueil from "./components/Accueil";
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/main.scss";
import BackgroundStatic from "./animations/BackgroundMouse";

// Lazy loaded components

const Projets = lazy(() => import("./components/Projets"));
const Veilles = lazy(() => import("./components/Veilles"));

function App() {
	return (
		<div>
			<BackgroundStatic>
				<div className="main-G">
					<Header />

					<main className="p-8 space-y-20 scroll-smooth">
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
