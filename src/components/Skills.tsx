import "./Skills.css";

/* ── Données skills ─────────────────────────────────
   Ajoute ou retire des skills ici facilement.
─────────────────────────────────────────────────── */
const skillGroups = [
	{
		category: "Frontend",
		skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Vite"],
	},
	{
		category: "Backend",
		skills: ["Node.js", "Express", "API REST", "SQL"],
	},
	{
		category: "Outils",
		skills: ["Git", "GitHub", "Figma", "Biome", "VS Code"],
	},
	{
		category: "En apprentissage",
		skills: ["Python", "IA / ML", "React Native"],
	},
];

export default function Skills() {
	return (
		<section className="skills" id="skills">
			<div className="skills__inner">
				<p className="section-label">Skills</p>
				<h2 className="skills__title">En cours 🔨</h2>

				<div className="skills__groups">
					{skillGroups.map((group) => (
						<div key={group.category} className="skill-group">
							<h3 className="skill-group__category">{group.category}</h3>
							<div className="skill-group__pills">
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
		</section>
	);
}
