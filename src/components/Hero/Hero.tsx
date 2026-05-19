import "./Hero.css";
import profil from "../../assets/bg_portfolio.png";

function Hero() {
	const tags = ["React", "TypeScript", "Node.js", "Python", "IA", "SQL"];

	return (
		<section className="hero" id="hero">
			<div className="hero__glow hero__glow--1" />
			<div className="hero__glow hero__glow--2" />
			<div className="hero__glow hero__glow--3" />

			<span className="hero__deco" style={{ top: "22%", left: "6%" }}>
				+
			</span>
			<span className="hero__deco" style={{ top: "18%", right: "9%" }}>
				+
			</span>
			<span className="hero__deco" style={{ bottom: "26%", left: "11%" }}>
				○
			</span>
			<span className="hero__deco" style={{ bottom: "30%", right: "7%" }}>
				+
			</span>

			<div className="hero__top">
				<div className="hero__top-left">
					<span className="hero__eyebrow">Lille, France · 2026</span>
					<h1 className="hero__title">
						Développeuse
						<br />
						full stack
					</h1>
				</div>
				<div className="hero__top-right">
					<div className="hero__pill">
						<span className="hero__pill-dot" />
						Dispo · Alternance sept. 2026
					</div>
					<p className="hero__desc">
						9 ans en analyse financière —<br />
						construire la solution avec une vision métier.
					</p>
				</div>
			</div>

			<div className="hero__img-wrap">
				<img
					src={profil}
					alt="Illustration développeuse full stack"
					className="hero__img"
				/>
			</div>

			<div className="hero__bottom">
				<div className="hero__cta">
					<a href="#projects" className="btn btn--dark">
						Projets <span className="btn__arrow">↗</span>
					</a>
					<a href="#contact" className="btn btn--glass">
						Contact
					</a>
				</div>
				<div className="hero__tags">
					{tags.map((tag) => (
						<span key={tag} className="hero__tag">
							{tag}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}

export default Hero;
