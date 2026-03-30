import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	return (
		<header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
			<a href="#hero" className="navbar__logo">
				<img src={logo} alt="Logo Coline" />
			</a>

			<nav className="navbar__links">
				<a href="#projects">PROJETS</a>
				<a href="#about">À PROPOS</a>
				<a href="#skills">SKILLS</a>
				<a href="#contact">CONTACT</a>
			</nav>

			<div className="navbar__status">
				<span className="navbar__dot" />
				Dispo: Sept. 2026
			</div>

			<button
				className={`navbar__burger ${menuOpen ? "navbar__burger--active" : ""}`}
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
				aria-expanded={menuOpen}
				type="button"
			>
				<span />
				<span />
				<span />
			</button>

			{createPortal(
				<div
					className={`navbar__mobile-menu ${menuOpen ? "navbar__mobile-menu--open" : ""}`}
				>
					<nav
						className="navbar__mobile-links"
						onClick={(e) => {
							if ((e.target as HTMLElement).tagName === "A") {
								setMenuOpen(false);
							}
						}}
					>
						<a href="#projects">PROJETS</a>
						<a href="#about">À PROPOS</a>
						<a href="#skills">SKILLS</a>
						<a href="#contact">CONTACT</a>
					</nav>
					<div className="navbar__mobile-status">
						<span className="navbar__dot" />
						Dispo: Sept. 2026
					</div>
				</div>,
				document.body,
			)}
		</header>
	);
}

export default Navbar;
