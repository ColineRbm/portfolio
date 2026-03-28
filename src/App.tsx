import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
	return (
		<body>
			<Navbar />
			<main>
				<Hero />
				<Projects />
			</main>
		</body>
	);
}

export default App;
