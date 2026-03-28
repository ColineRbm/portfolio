import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
			<a href="#hero" className="navbar__logo">
				Coline Rabemihoatra
			</a>
			<nav className="navbar__links">
				<a href="#projects">Projets</a>
				<a href="#about">À propos</a>
				<a href="#skills">Skills</a>
				<a href="#contact">Contact</a>
			</nav>
			<div className="navbar__status">
				<span className="navbar__dot" />
				Disponible — juillet 2026
			</div>
		</header>
	);
}

export default Navbar;
