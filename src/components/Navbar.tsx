import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
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
				Disponible — Sept. 2026
			</div>
		</header>
	);
}

export default Navbar;
