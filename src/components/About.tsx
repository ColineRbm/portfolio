import "./About.css";
import coline from "../assets/coline.png";

export default function About() {
	return (
		<div className="background">
			<section className="about" id="about">
				<div className="about__photo-col">
					<img
						src={coline}
						alt="Coline Rabemihoatra"
						className="about__photo"
					/>
				</div>

				<div className="about__text-col">
					<p className="section-label">À propos</p>

					<h2 className="about__title">
						Pas une junior
						<br />
						<em>comme les autres.</em>
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
							<span className="timeline-item__year">2026</span>
							<div className="timeline-item__content">
								<strong>Wild Code School, Lille</strong>
								<p>Développement Full Stack & IA — bootcamp intensif 5 mois</p>
							</div>
						</div>
						<div className="timeline-item">
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
