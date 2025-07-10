import Navbar from "./components/Navbar";
import Header from "./components/Header";
import BackgroundMouse from "./animations/BackgroundMouse";
import Accueil from "./components/Accueil";
import Projets from "./components/Projets";
import Competences from "./components/Competences";
import Veilles from "./components/Veilles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/main.scss";

function App() {
	return (
		<div>
			<BackgroundMouse>
				<Navbar />

				<div className="main-G">
					<main className="p-8 space-y-20 scroll-smooth">
						<section id="header">
							<Header />
						</section>
						<section id="accueil">
							<Accueil />
						</section>
						<section id="projets">
							<Projets />
						</section>
						<section id="competences">
							<Competences />
						</section>
						<section id="veilles">
							<Veilles />
						</section>
						<section id="contact">
							<Contact />
						</section>
						<section>
							<Footer />
						</section>
					</main>
				</div>
			</BackgroundMouse>
		</div>
	);
}

export default App;
