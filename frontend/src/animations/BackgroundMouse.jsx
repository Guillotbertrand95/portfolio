// src/components/BackgroundMouse.jsx
import { useEffect, useState } from "react";
import "../styles/BackgroundMouse.scss";

export default function BackgroundMouse({ children }) {
	const [position, setPosition] = useState({ x: 50, y: 50 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			const x = (e.clientX / window.innerWidth) * 100;
			const y = (e.clientY / window.innerHeight) * 100;
			setPosition({ x, y });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div
			className="background-mouse"
			style={{
				background: `radial-gradient(circle at ${position.x}% ${position.y}%,#C2EFEB,#ECFEE8 )`,
			}}
		>
			{children}
		</div>
	);
}
