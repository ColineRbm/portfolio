import "./ProjectCard.css";

interface ProjectCardProps {
	number: string;
	title: string;
	description: string;
	techs: string[];
	githubUrl?: string;
	liveUrl?: string;
	featured?: boolean;
	position: "center" | "side" | "far";
	onClick: () => void;
}

function ProjectCard({
	number,
	title,
	description,
	techs,
	githubUrl,
	liveUrl,
	featured = false,
	position,
	onClick,
}: ProjectCardProps) {
	return (
		<article
			className={`pcard pcard--${position}`}
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === "Enter") onClick();
			}}
		>
			<div className="pcard__top">
				<div className="pcard__num">{number}</div>
				<div>
					<h3 className="pcard__title">{title}</h3>
					<p className="pcard__desc">{description}</p>
					<div className="pcard__techs">
						{techs.map((t) => (
							<span key={t} className="pcard__tech">
								{t}
							</span>
						))}
					</div>
				</div>
			</div>
			<div className="pcard__bot">
				<div className="pcard__links">
					{githubUrl && (
						<a
							href={githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="pcard__link"
							onClick={(e) => e.stopPropagation()}
						>
							GitHub ↗
						</a>
					)}
					{liveUrl && (
						<a
							href={liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="pcard__link pcard__link--live"
							onClick={(e) => e.stopPropagation()}
						>
							Voir ↗
						</a>
					)}
				</div>
				{featured && <span className="pcard__badge">Featured</span>}
			</div>
		</article>
	);
}

export default ProjectCard;
