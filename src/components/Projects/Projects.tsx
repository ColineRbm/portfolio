import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";

const projects = [
	{
		number: "01",
		title: "Portfolio",
		description:
			"Portfolio développeuse web — projets, stack technique et parcours. Déployé sur GitHub Pages.",
		techs: ["React", "TypeScript", "CSS", "Vite"],
		githubUrl: "https://github.com/ColineRbm/portfolio",
		liveUrl: "https://ColineRbm.github.io/portfolio",
		featured: false,
	},
	{
		number: "02",
		title: "WanderMind",
		description:
			"Conseiller voyage IA — profil voyageur + recommandations personnalisées via prompt engineering et LLaMA 3.3.",
		techs: ["Python", "Flask", "React", "Groq API"],
		githubUrl: "https://github.com/ColineRbm/wandermind",
		liveUrl: "https://wandermind-h1ug.onrender.com",
		featured: true,
	},
	{
		number: "03",
		title: "Kapsul",
		description:
			"App budget personnel — suivi transactions, graphiques dynamiques, stockage local.",
		techs: ["HTML", "CSS", "JavaScript", "Chart.js"],
		githubUrl: "https://github.com/ColineRbm/Kapsul",
		featured: false,
	},
	{
		number: "04",
		title: "ERA",
		description:
			"Hackathon 48h — app voyage historique. Timeline avec gestion des états.",
		techs: ["React", "TypeScript", "Vite", "CSS"],
		githubUrl: "https://github.com/ColineRbm/ERA",
		featured: true,
	},
	{
		number: "05",
		title: "TeamUp",
		description:
			"Trouver des partenaires sportifs. Fullstack en équipe, MySQL, CSS Grid.",
		techs: ["React", "TypeScript", "Node.js", "MySQL"],
		githubUrl: "https://github.com/ColineRbm/TeamUp-front",
		featured: false,
	},
];

export default function Projects() {
	const [cur, setCur] = useState(0);

	const move = (dir: number) => {
		setCur((prev) => (prev + dir + projects.length) % projects.length);
	};

	return (
		<section className="projects" id="projects">
			<div className="projects__header">
				<p className="projects__label">Projets sélectionnés</p>
				<div className="projects__nav">
					<span className="projects__counter">
						{String(cur + 1).padStart(2, "0")} /{" "}
						{String(projects.length).padStart(2, "0")}
					</span>
					<button
						type="button"
						className="projects__arr"
						onClick={() => move(-1)}
					>
						←
					</button>
					<button
						type="button"
						className="projects__arr"
						onClick={() => move(1)}
					>
						→
					</button>
				</div>
			</div>

			<div className="projects__carousel-wrap">
				<div
					className="projects__track"
					style={{
						transform: `translateX(calc(-${cur} * (220px + 16px) + (50% - 130px)))`,
					}}
				>
					{projects.map((p, i) => {
						const diff = (i - cur + projects.length) % projects.length;
						const position =
							diff === 0
								? "center"
								: diff === 1 || diff === projects.length - 1
									? "side"
									: "far";
						return (
							<ProjectCard
								key={p.number}
								{...p}
								position={position}
								onClick={() => setCur(i)}
							/>
						);
					})}
				</div>
			</div>

			<div className="projects__dots">
				{projects.map((project, i) => (
					<button
						type="button"
						key={project.title}
						className={`projects__dot ${i === cur ? "projects__dot--active" : ""}`}
						onClick={() => setCur(i)}
					/>
				))}
			</div>
		</section>
	);
}
