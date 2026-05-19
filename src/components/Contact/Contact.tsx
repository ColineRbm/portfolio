import { useState } from "react";
import "./Contact.css";

export default function Contact() {
	const [copied, setCopied] = useState(false);

	const handleCopyEmail = () => {
		navigator.clipboard.writeText("coline.rbm@gmail.com");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section className="contact" id="contact">
			<div className="contact__inner">
				<div className="contact__left">
					<p className="contact__label">Contact</p>
					<h2 className="contact__title">
						Envie de construire
						<br />
						<em>cette aventure ensemble ?</em>
					</h2>
					<p className="contact__desc">
						Disponible à partir de septembre 2026 pour une alternance avec
						spécialisation IA et IA agentique
					</p>
				</div>

				<div className="contact__right">
					<button
						type="button"
						className="contact__email"
						onClick={handleCopyEmail}
					>
						<span>coline.rbm@gmail.com</span>
						<span className="contact__email-action">
							{copied ? "✓ Copié !" : "Copier"}
						</span>
					</button>

					<div className="contact__links">
						<a
							href="https://github.com/ColineRbm"
							target="_blank"
							rel="noopener noreferrer"
							className="contact__link"
						>
							GitHub ↗
						</a>
						<a
							href="https://www.linkedin.com/in/coline-rabemihoatra/"
							target="_blank"
							rel="noopener noreferrer"
							className="contact__link"
						>
							LinkedIn ↗
						</a>
						<a
							href={`${import.meta.env.BASE_URL}CV_Coline_Rabemihoatra.pdf`}
							target="_blank"
							rel="noopener noreferrer"
							className="contact__link contact__link--primary"
						>
							Télécharger CV ↗
						</a>
					</div>
				</div>
			</div>

			<footer className="contact__footer">
				<span>
					© 2026 Coline Rabemihoatra · Fait avec React · TypeScript · Vite
				</span>
			</footer>
		</section>
	);
}
