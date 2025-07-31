import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// src/animations/lazyAnimateStagger.js
export const lazyAnimateStagger = async (
	targets,
	{ withScroll = true } = {}
) => {
	if (!targets || !targets.length) {
		console.warn("⚠️ Aucun élément à animer !");
		return;
	}

	// Import dynamique
	const gsapModule = await import("gsap");
	const ScrollTriggerModule = await import("gsap/ScrollTrigger");
	const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
	const ScrollTrigger =
		ScrollTriggerModule.ScrollTrigger ||
		ScrollTriggerModule.default ||
		ScrollTriggerModule;

	gsap.registerPlugin(ScrollTrigger);

	// Kill animations précédentes
	targets.forEach((target) => {
		gsap.killTweensOf(target);
		const st = ScrollTrigger.getById(target.dataset.stId);
		if (st) st.kill();
	});

	const scrollTriggerId = `stagger-${Date.now()}`;

	// ✅ Détection mobile
	const isMobile = window.matchMedia("(max-width: 767px)").matches;

	const animProps = {
		x: 0,
		opacity: 1,
		scale: 1,
		rotate: 0,
		duration: 2,
		ease: "expo.out",
		stagger: {
			amount: 1.2,
			from: "start",
		},
	};

	if (withScroll) {
		animProps.scrollTrigger = {
			id: scrollTriggerId,
			trigger: targets[0],
			start: "top 90%",
			toggleActions: isMobile
				? "play none none none" // ✅ Mobile : une seule fois à l'apparition
				: "play reverse play reverse", // 🖥️ Desktop : comme avant
			invalidateOnRefresh: true,
			once: isMobile, // ✅ Pour que sur mobile l’animation ne rejoue pas
		};

		targets.forEach((target) => {
			target.dataset.stId = scrollTriggerId;
		});
	}

	gsap.fromTo(
		targets,
		{ x: 100, opacity: 0, scale: 0.95, rotate: 2 },
		animProps
	);
};
