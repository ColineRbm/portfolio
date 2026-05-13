import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";

const projects = [
	{
		number: "01",
		title: "Portfolio personnel",
		description:
			"Portfolio développé avec React, TypeScript et Vite. Architecture modulaire, composants réutilisables et design épuré pensé pour une expérience fluide et moderne.",
		techs: ["React", "TypeScript", "Vite", "CSS"],
		githubUrl: "https://github.com/ColineRbm/portfolio",
		liveUrl: "https://colinerbm.github.io/portfolio/",
		featured: false,
	},
	{
		number: "02",
		title: "Kapsul",
		description:
			"App de gestion de budget personnel permettant de suivre ses transactions, visualiser ses dépenses et analyser son solde en temps réel. Interface responsive avec stockage local, graphiques dynamiques et expérience utilisateur fluide.",
		techs: ["HTML", "CSS", "JavaScript", "Chart.js"],
		githubUrl: "https://github.com/ColineRbm/Kapsul",
		liveUrl: "https://github.com/ColineRbm/Kapsul",
		featured: false,
	},
	{
		number: "03",
		title: "ERA",
		description:
			"Hackathon 48h — application de voyage historique. Développement du composant Timeline avec theming HSL dynamique par ère et gestion des états past/active/future.",
		techs: ["React", "TypeScript", "Vite", "CSS"],
		githubUrl: "https://github.com/ColineRbm/ERA",
		liveUrl: "https://github.com/ColineRbm/ERA",
		featured: true,
	},
	{
		number: "04",
		title: "TeamUp",
		description:
			"Application pour trouver des partenaires sportifs. Développement de la page profil et des composants RecentActivity et Skills.",
		techs: ["React", "TypeScript", "Node.js", "MySQL"],
		githubUrl: "https://github.com/ColineRbm/TeamUp-front",
		liveUrl: "https://github.com/ColineRbm/TeamUp-front",
		featured: true,
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
