import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import About from "./container/About/About";
import Header from "./container/Header/Header";
import Skills from "./container/Skills/Skills";
import Work from "./container/Work/Work";

function App() {
	return (
		<>
			<div className="app">
				<NavBar />
				<Header />
				<About />
				<Work />
				<Skills />
			</div>
		</>
	);
}

export default App;
