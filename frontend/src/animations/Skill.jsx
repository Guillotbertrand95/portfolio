// Skill.jsx
import { useEffect } from "react";
import Lottie from "lottie-react";

export default function Skill({ title, animation }) {
	return (
		<div className="skill-card">
			<Lottie animationData={animation} loop={true} />
			<h4>{title}</h4>
		</div>
	);
}
