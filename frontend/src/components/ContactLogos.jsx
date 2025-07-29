import React from "react";
import "../styles/ContactLogos.scss";

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
		href: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:b4f69d06-78de-4ae1-bcb4-1c5758b582f6",
		label: "CV PDF",
		iconClass: "fa-solid fa-file-pdf",
	},
];

export default function ContactLogos() {
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
