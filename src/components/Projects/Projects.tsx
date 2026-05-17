import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";

const projects = [
	{
		number: "01",
		title: "WanderMind",
		description:
			"Application web full-stack de conseiller voyage intelligent. L'utilisateur choisit son profil de voyageur (backpacker, luxe, famille, aventure) et obtient des recommandations personnalisées grâce au prompt engineering et à une IA conversationnelle avec mémoire de session.",
		techs: ["Python", "Flask", "React", "Groq API", "LLaMA 3.3"],
		githubUrl: "https://github.com/ColineRbm/wandermind",
		liveUrl: "https://wandermind-h1ug.onrender.com",
		featured: true,
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
			"Hackathon 48h — application de voyage historique. Développement du composant Timeline avec gestion des états.",
		techs: ["React", "TypeScript", "Vite", "CSS"],
		githubUrl: "https://github.com/ColineRbm/ERA",
		liveUrl: "https://github.com/ColineRbm/ERA",
		featured: true,
	},
	{
		number: "04",
		title: "TeamUp",
		description: "Application pour trouver des partenaires sportifs.",
		techs: ["React", "TypeScript", "Node.js", "MySQL"],
		githubUrl: "https://github.com/ColineRbm/TeamUp-front",
		liveUrl: "https://github.com/ColineRbm/TeamUp-front",
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
