import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
	{
		number: "01",
		title: "Portfolio personnel",
		description:
			"Ce portfolio — construit avec React, TypeScript et Vite. Design blanc/crème, hover corail, composants réutilisables et code propre.",
		techs: ["React", "TypeScript", "Vite", "CSS"],
		githubUrl: "https://github.com/ton-pseudo/portfolio",
		liveUrl: "#",
		featured: true,
	},
	{
		number: "02",
		title: "Page vitrine HTML/CSS",
		description:
			"Premier projet front — mise en page responsive, flexbox, variables CSS et animation au scroll.",
		techs: ["HTML", "CSS", "JavaScript"],
		githubUrl: "https://github.com/ton-pseudo/projet-html",
		featured: false,
	},
	{
		number: "03",
		title: "Projet React",
		description:
			"Application React avec composants, props, state et appel à une API publique.",
		techs: ["React", "JavaScript", "API REST"],
		githubUrl: "https://github.com/ton-pseudo/projet-react",
		featured: false,
	},
	{
		number: "04",
		title: "Projet à venir",
		description:
			"En cours de construction — Node.js, Express et base de données.",
		techs: ["Node.js", "Express", "SQL"],
		featured: false,
	},
];

export default function Projects() {
	return (
		<section className="projects" id="projects">
			<div className="projects__header">
				<p className="section-label">Projets sélectionnés</p>
				<span className="projects__count">{projects.length} projets</span>
			</div>

			<div className="projects__grid">
				{projects.map((p) => (
					<ProjectCard key={p.number} {...p} />
				))}
			</div>
		</section>
	);
}
