import { Code } from "lucide-react";
import "./Skills.css";

const skillGroups = [
	{
		category: "Frontend",
		skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Vite"],
		learning: false,
	},
	{
		category: "Backend",
		skills: ["Node.js", "Express", "API REST", "SQL", "Python"],
		learning: false,
	},
	{
		category: "Outils",
		skills: ["Git", "GitHub", "Biome", "VS Code"],
		learning: false,
	},
	{
		category: "Design",
		skills: ["Wireframing", "Figma"],
		learning: true,
	},
	{
		category: "Finance & Data",
		skills: ["Reporting", "Analyse de données", "Excel", "Modélisation"],
		learning: false,
	},
];

export default function Skills() {
	return (
		<section className="skills" id="skills">
			<div className="skills__content">
				<div className="skills__header">
					<p className="skills__label">Stack</p>
				</div>

				<div className="skills__list">
					{skillGroups.map((group) => (
						<div
							key={group.category}
							className={`skill-row${group.learning ? " skill-row--learning" : ""}`}
						>
							<span className="skill-row__category">{group.category}</span>
							<div className="skill-row__pills">
								{group.skills.map((skill) => (
									<span key={skill} className="skill-pill">
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="skills__icon-col">
				<Code size={340} className="skills__icon" />
			</div>
		</section>
	);
}
