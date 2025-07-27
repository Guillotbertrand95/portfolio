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

		targets.forEach((target) => {
			target.dataset.stId = scrollTriggerId;
		});
	}

	gsap.fromTo(targets, { x: 100, opacity: 0 }, animProps);
};
