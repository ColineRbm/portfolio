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
					<p className="section-label">Contact</p>
					<h2 className="contact__title">
						Envie de vivre cette nouvelle aventure <em>together</em> ?<br />
						<em className="em-color">Parlons-en.</em>
					</h2>
					<p className="contact__desc">
						Je suis disponible à partir de septembre 2026 pour un poste en
						développement web/mobile & IA. N'hésitez pas à me contacter !
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
							href="/CV_Coline_Rabemihoatra.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="contact__link contact__link--primary"
						>
							Télécharger mon CV ↗
						</a>
					</div>
				</div>
			</div>

			<footer className="contact__footer">
				<span>© 2026 Coline Rabemihoatra</span>
				<span>Fait avec React · TypeScript · Vite</span>
			</footer>
		</section>
	);
}
