export default function BackgroundStatic({ children }) {
	return (
		<div
			className="background-mouse"
			style={{
				background:
					"linear-gradient(220deg,#231942 ,#08415C ,#231942 )",
				minHeight: "100vh",
				color: "#9D44B5",
			}}
		>
			{children}
		</div>
	);
}
