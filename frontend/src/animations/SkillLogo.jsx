import "../styles/SkillLogoS.scss"; // Le style propre à SkillLogo

const skills = [
	{ className: "devicon-javascript-plain colored", name: "JavaScript" },
	{ className: "devicon-react-original colored", name: "React" },
	{ className: "devicon-python-plain colored", name: "Python" },
	{ className: "devicon-css3-plain colored", name: "CSS" },
	{ className: "devicon-html5-plain colored", name: "HTML" },
	{ className: "devicon-git-plain colored", name: "Git" },
];

const SkillLogo = () => (
	<div className="skill-logos">
		{skills.map(({ className, name }) => (
			<div key={name} className="skill-card">
				<i className={className + " skill-icon"}></i>
				<p className="skill-name">{name}</p>
			</div>
		))}
	</div>
);

export default SkillLogo;
