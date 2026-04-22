import ProjectCard from "../ProjectCard/ProjectCard";
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
		featured: false,
	},
	{
		number: "02",
		title: "Kapsul",
		description:
			"App. de gestion de budget personnel permettant de suivre ses transactions, visualiser ses dépenses et analyser son solde en temps réel. Interface responsive avec stockage local, graphiques dynamiques et expérience utilisateur fluide.",
		techs: ["HTML", "CSS", "JavaScript (Vanilla)", "Chart.js"],
		githubUrl: "https://github.com/ColineRbm",
		liveUrl: "https://github.com/ColineRbm/Kapsul",
		featured: false,
	},
	{
		number: "03",
		title: "Spöt",
		description:
			"Application web de découverte de restaurants développée en React et TypeScript. Implémentation de filtres dynamiques (ville, préférences), intégration d’une API Express et gestion des interactions utilisateur (réservations de déjeuners entre inconnus).",
		techs: ["React", "TypeScript", "Vite", "Biome", "API Express"],
		githubUrl: "https://github.com/ColineRbm",
		liveUrl: "https://github.com/ColineRbm/Spot",
		featured: true,
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
