import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
	return (
		<body>
			<Navbar />
			<main>
				<Hero />
				<Projects />
				<About />
				<Skills />
				<Contact />
			</main>
		</body>
	);
}

export default App;
