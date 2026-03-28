import "./ProjectCard.css";

interface ProjectCardProps {
	number: string;
	title: string;
	description: string;
	techs: string[];
	githubUrl?: string;
	liveUrl?: string;
	featured?: boolean;
}

function ProjectCard({
	number,
	title,
	description,
	techs,
	githubUrl,
	liveUrl,
	featured = false,
}: ProjectCardProps) {
	return (
		<article
			className={`project-card ${featured ? "project-card--featured" : ""}`}
		>
			<div className="project-card__header">
				<span className="project-card__number">{number}</span>
				{featured && <span className="project-card__badge">Featured</span>}
			</div>

			<h3 className="project-card__title">{title}</h3>
			<p className="project-card__desc">{description}</p>

			<div className="project-card__techs">
				{techs.map((t) => (
					<span key={t} className="tag">
						{t}
					</span>
				))}
			</div>

			<div className="project-card__links">
				{githubUrl && (
					<a
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="project-card__link"
					>
						GitHub ↗
					</a>
				)}
				{liveUrl && (
					<a
						href={liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="project-card__link project-card__link--live"
					>
						Voir le site ↗
					</a>
				)}
			</div>
		</article>
	);
}

export default ProjectCard;
