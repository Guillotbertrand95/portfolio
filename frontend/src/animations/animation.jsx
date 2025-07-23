import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateStagger = (targets, { withScroll = true } = {}) => {
	if (!targets || !targets.length) {
		console.warn("⚠️ Aucun élément à animer !");
		return;
	}

	// Avant d'animer, on kill les animations et ScrollTriggers existants sur ces éléments
	targets.forEach((target) => {
		gsap.killTweensOf(target);
		const st = ScrollTrigger.getById(target.dataset.stId);
		if (st) st.kill();
	});

	// Créer un ID unique pour le ScrollTrigger, ça évite les conflits
	const scrollTriggerId = `stagger-${Date.now()}`;

	const animProps = {
		x: 0,
		opacity: 1,
		duration: 1.6,
		stagger: 0.3,
		ease: "power3.out",
	};

	if (withScroll) {
		animProps.scrollTrigger = {
			id: scrollTriggerId,
			trigger: targets[0],
			start: "top 90%",
			toggleActions: "play reverse play reverse",
			invalidateOnRefresh: true,
		};
		// Enregistre l'ID dans dataset pour pouvoir gérer le kill plus tard
		targets.forEach((target) => {
			target.dataset.stId = scrollTriggerId;
		});
	}

	gsap.fromTo(
		targets,
		{ x: 100, opacity: 0 }, // départ à droite, invisible
		animProps
	);
};
