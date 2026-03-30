import { Briefcase, GraduationCap, Route } from "lucide-react";
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
					<p className="section-label tab">À propos</p>

					<h2 className="about__title">
						Hybride
						<br />
						<em>business & tech</em>
					</h2>

					<p className="about__desc">
						Pendant 9 ans, j’ai évolué dans l’analyse de données financières au
						sein du secteur bancaire. Cette expérience m’a permis de développer
						une forte rigueur analytique, une compréhension fine des systèmes
						complexes, ainsi qu’un sens aigu des délais et des exigences de
						production.
					</p>
					<p className="about__desc">
						Aujourd’hui, je me consacre au développement web. J’aborde le code
						avec la même exigence : concevoir des interfaces claires,
						structurées et maintenables, avec une attention particulière portée
						à l’expérience utilisateur et à la qualité d’exécution.
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

							<span className="timeline-item__year">2016–25</span>

							<div className="timeline-item__content">
								<strong>Analyste — secteur bancaire, Paris</strong>
								<p>
									Analyste financier, data analyst, chargée de mission, manager:
									<br /> reporting, réglementation, modélisation, management.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
