import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const staggerOnScroll = (targets) => {
	gsap.fromTo(
		targets,
		{ y: 50, opacity: 0 }, // état initial (invisible, décalé)
		{
			y: 0,
			opacity: 1,
			duration: 1,
			stagger: 0.2,
			ease: "power3.out",
			scrollTrigger: {
				trigger: targets[0],
				start: "top 90%",
				toggleActions: "play reverse play reverse",
				invalidateOnRefresh: true,
			},
		}
	);
};
