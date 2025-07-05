import Navbar from "./components/Navbar";
import Header from "./components/Header";

import Projets from "./components/Projets";
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/main.scss";
function App() {
	return (
		<div>
			<Navbar />

			<main className="p-8 space-y-20 scroll-smooth">
				<section id="accueil">
					<Header />
				</section>

				<section id="projets">
					<Projets />
				</section>
				<section id="competences">
					<Competences />
				</section>
				<section id="contact">
					<Contact />
				</section>
				<section>
					<Footer />
				</section>
			</main>
		</div>
	);
}

export default App;
