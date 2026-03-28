import "./Hero.css";
import profil from "../assets/profil.png";

function Hero() {
	const tags = ["React", "TypeScript", "Node.js", "Python", "IA"];

	const tickerItems = [
		{ id: 1, text: "📍 Lille, France" },
		{ id: 2, text: "🎓 Wild Code School" },
		{ id: 3, text: "⚡ React · Node · IA" },
		{ id: 4, text: "💼 10 ans en finance bancaire" },
		{ id: 5, text: "📍 Lille, France" },
		{ id: 6, text: "🎓 Wild Code School" },
		{ id: 7, text: "⚡ React · Node · IA" },
		{ id: 8, text: "💼 10 ans en finance bancaire" },
	];

	return (
		<section className="hero" id="hero">
			{/* Left column — text */}
			<div className="hero__content">
				<p className="section-label hero__eyebrow">développeuse full stack</p>
				<h1 className="hero__name">
					C<em>o</em>line
				</h1>
				<p className="hero__tagline">
					Je construis des produits web modernes,
					<br />
					performants et centrés utilisateur.
				</p>

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

			{/* Ticker bar */}
			<div className="hero__ticker">
				{tickerItems.map((item) => (
					<span key={item.id} className="hero__ticker-item">
						{item.text}
					</span>
				))}
			</div>
		</section>
	);
}

export default Hero;
