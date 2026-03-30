import { Briefcase, Route, GraduationCap } from "lucide-react";
import "./About.css";

export default function About() {
	return (
		<div className="background">
			<section className="about" id="about">
				<div className="about__photo-col">
					<p>
						<Route size={400} className="icon-route" />
					</p>
				</div>

				<div className="about__text-col">
					<p className="section-label">À propos</p>

					<h2 className="about__title">
						Hybride
						<br />
						<em>business & tech</em>
					</h2>

					<p className="about__desc">
						Pendant 10 ans, j'ai analysé des données financières complexes dans
						le secteur bancaire parisien. J'ai appris à communiquer avec
						rigueur, à comprendre les systèmes et à livrer dans les délais.
					</p>
					<p className="about__desc">
						Aujourd'hui je code — et cette expérience me différencie vraiment.
						Je construis des interfaces avec la même exigence qu'un rapport
						financier : propres, lisibles, et pensées pour l'utilisateur final.
					</p>

					<div className="about__timeline">
						<div className="timeline-item">
							<div className="timeline-icon">
								<GraduationCap size={18} />
							</div>

							<span className="timeline-item__year">2026</span>

							<div className="timeline-item__content">
								<strong>Wild Code School, Lille</strong>
								<p>Développement Full Stack & IA — bootcamp intensif 5 mois</p>
							</div>
						</div>

						<div className="timeline-item">
							<div className="timeline-icon">
								<Briefcase size={18} />
							</div>

							<span className="timeline-item__year">2015–25</span>

							<div className="timeline-item__content">
								<strong>Analyste financière — secteur bancaire, Paris</strong>
								<p>
									Modélisation, reporting, communication avec des équipes
									pluridisciplinaires
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
