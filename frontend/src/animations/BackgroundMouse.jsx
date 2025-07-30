export default function BackgroundStatic({ children }) {
	return (
		<div
			className="background-mouse"
			style={{
				background:
					"linear-gradient(220deg, #E2E2FF, #D7FFE9, #B8E3FF)",
				minHeight: "100vh",
				color: "#F2F8FF",
			}}
		>
			{children}
		</div>
	);
}
