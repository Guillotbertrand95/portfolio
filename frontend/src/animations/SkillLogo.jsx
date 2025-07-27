import React from "react";
import {
	FaReact,
	FaJsSquare,
	FaNodeJs,
	FaPython,
	FaServer,
} from "react-icons/fa";
import { SiMongodb, SiGit } from "react-icons/si";

const skills = [
	{ Icon: FaReact, name: "React" },
	{ Icon: FaJsSquare, name: "JavaScript" },
	{ Icon: FaNodeJs, name: "Node.js" },
	{ Icon: SiMongodb, name: "MongoDB" },
	{ Icon: FaPython, name: "Python" },
	{ Icon: FaServer, name: "Express" },
	{ Icon: SiGit, name: "Git" },
];

const SkillLogo = () => (
	<div className="skill-logos">
		{skills.map(({ Icon, name }) => (
			<div key={name} className="skill-card">
				<Icon className={`skill-icon ${name.toLowerCase()}`} />
				<p className="skill-name">{name}</p>
			</div>
		))}
	</div>
);

export default SkillLogo;
