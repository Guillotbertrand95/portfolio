import "../styles/BackgroundMouse.scss";

export default function BackgroundStatic({ children }) {
	return (
		<div
			className="background-mouse"
			style={{
				background: "linear-gradient(200deg, #f5f7fa, #022b3a )", // choisis ton style ici
			}}
		>
			{children}
		</div>
	);
}
