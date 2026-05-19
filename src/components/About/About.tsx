import { Briefcase, GraduationCap } from "lucide-react";
import "./About.css";
import profilImg from "../../assets/coline.png";

export default function About() {
	return (
		<section className="about" id="about">
			<div className="about__left">
				<p className="about__label">À propos</p>
				<h2 className="about__title">
					Hybride
					<br />
					<em>business & tech</em>
				</h2>
				<p className="about__desc">
					Pendant 9 ans, j'ai évolué dans l'analyse de données financières au
					sein du secteur bancaire — rigueur analytique, systèmes complexes,
					exigences de production.
				</p>
				<p className="about__desc">
					Aujourd'hui, je construis des interfaces claires, structurées et
					maintenables, avec la même exigence qu'en finance.
				</p>
			</div>

			<div className="about__photo-col">
				<img
					src={profilImg}
					alt="Coline Rabemihoatra"
					className="about__photo"
				/>
			</div>

			<div className="about__right">
				<div className="about__timeline">
					<div className="about__timeline-item">
						<div className="about__timeline-icon">
							<GraduationCap size={16} />
						</div>
						<div className="about__timeline-content">
							<span className="about__timeline-year">2026</span>
							<strong>Wild Code School, Lille</strong>
							<p>Développement Full Stack & IA — bootcamp intensif 5 mois</p>
						</div>
					</div>

					<div className="about__timeline-item">
						<div className="about__timeline-icon">
							<Briefcase size={16} />
						</div>
						<div className="about__timeline-content">
							<span className="about__timeline-year">2016 – 2025</span>
							<strong>Analyste — secteur bancaire, Paris</strong>
							<p>Reporting, réglementation, modélisation, management.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
