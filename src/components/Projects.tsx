import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projects = [
	{
		number: "01",
		title: "Portfolio personnel",
		description:
			"Ce Portfolio développé avec React, TypeScript et Vite. Architecture modulaire, composants réutilisables et design épuré pensé pour une expérience fluide et moderne.",
		techs: ["React", "TypeScript", "Vite", "CSS"],
		githubUrl: "https://github.com/ColineRbm",
		liveUrl: "https://github.com/ColineRbm/portfolio",
		featured: true,
	},
	{
		number: "02",
		title: "Kapsul",
		description:
			"App. de gestion de budget personnel permettant de suivre ses transactions, visualiser ses dépenses et analyser son solde en temps réel. Interface responsive avec stockage local, graphiques dynamiques et expérience utilisateur fluide.",
		techs: ["HTML", "CSS", "JavaScript", "Chart.js"],
		githubUrl: "https://github.com/ColineRbm",
		liveUrl: "https://github.com/ColineRbm/Kapsul",
		featured: true,
	},
	{
		number: "03",
		title: "Projet",
		description: "à venir",
		techs: ["//"],
		githubUrl: "https://github.com/ColineRbm",
		featured: false,
	},
	{
		number: "04",
		title: "Projet",
		description: "à venir",
		techs: ["//"],
		githubUrl: "https://github.com/ColineRbm",
		featured: false,
	},
];

export default function Projects() {
	return (
		<section className="projects" id="projects">
			<div className="projects__header">
				<p className="section-label tab">Projets</p>
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
