import React from "react";
import "../styles/ContactLogosS.scss";

const logos = [
	{
		href: "https://github.com/Guillotbertrand95",
		label: "GitHub",
		iconClass: "devicon-git-plain colored",
	},
	{
		href: "https://linkedin.com/in/bertrand-guillot-618a211a1",
		label: "LinkedIn",
		iconClass: "devicon-linkedin-plain colored",
	},
	{
		href: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:b01a0118-b2bf-4222-aac2-ea718f81fdf8",
		label: "CV PDF",
		iconClass: "fa-solid fa-file-pdf",
	},
];

export default function ContactLogosS() {
	return (
		<div className="contact-logos">
			{logos.map(({ href, label, iconClass }) => (
				<a
					key={label}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`Lien vers ${label}`}
					className="btn"
					title={label}
				>
					<i className={iconClass}></i>
				</a>
			))}
		</div>
	);
}
