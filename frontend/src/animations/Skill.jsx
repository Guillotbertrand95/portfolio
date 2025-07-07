import { useEffect } from "react";
import Lottie from "lottie-react";
import htmlAnimation from "../lotties/html-logo.json";

export default function Skill({ title }) {
	return (
		<div className="skill-card">
			<Lottie animationData={htmlAnimation} loop={true} />
			<h4>{title}</h4>
		</div>
	);
}
