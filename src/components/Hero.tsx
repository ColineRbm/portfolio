import {
	ArrowUpFromLine,
	Backpack,
	GraduationCap,
	House,
	Landmark,
} from "lucide-react";
import "./Hero.css";
import profil from "../assets/coline.png";

function Hero() {
	const tags = ["React", "TypeScript", "Node.js", "Python", "IA"];

	const tickerItems = [
		{
			id: 1,
			icon: <House size={14} color="var(--text-color-two)" />,
			text: " Lille, France",
		},
		{
			id: 2,
			icon: <GraduationCap size={14} color="var(--text-color-two)" />,
			text: " Wild Code School",
		},
		{
			id: 3,
			icon: <ArrowUpFromLine size={14} color="var(--text-color-two)" />,
			text: " 31 ans",
		},
		{
			id: 4,
			icon: <Landmark size={14} color="var(--text-color-two)" />,
			text: " 9 ans en finance",
		},
		{
			id: 5,
			icon: <Backpack size={14} color="var(--text-color-two)" />,
			text: " 4 mois d'Asie du Sud-Est en backpack, 2025",
		},
	];

	return (
		<section className="hero" id="hero">
			{/* Left column — text */}
			<div className="hero__content">
				<p className="section-label hero__eyebrow">
					développeuse
					<br />
					full stack
				</p>
				<div className="bubble-top">
					<h1 className="hero__name">Coline</h1>
					<p className="hero__tagline">
						Profil hybride : background finance
						<br />
						"comprendre le métier, construire la solution"
					</p>
				</div>

				<div className="hero__tags">
					{tags.map((tag) => (
						<span key={tag} className="tag">
							{tag}
						</span>
					))}
				</div>

				<div className="hero__cta">
					<a href="#projects" className="btn btn--primary">
						Voir mes projets
					</a>
					<a href="#contact" className="btn btn--ghost">
						Me contacter
					</a>
				</div>
			</div>

			{/* Right column — photo */}
			<div className="hero__photo-wrap">
				<div className="hero__photo-group">
					<div className="hero__grid" />
					<img
						src={profil}
						alt="Coline Rousseau, développeuse full stack"
						className="hero__photo"
					/>
					<div className="hero__badge">
						<span className="hero__badge-school">Wild Code School</span>
						<span className="hero__badge-year">Promo 2026</span>
					</div>
				</div>
			</div>

			{/* Ticker bar */}
			<div className="hero__ticker">
				{tickerItems.map((item) => (
					<span key={item.id} className="hero__ticker-item">
						{item.icon}
						{item.text}
					</span>
				))}
			</div>
		</section>
	);
}

export default Hero;
