import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import About from "./container/About/About";
import Header from "./container/Header/Header";
import Work from "./container/Work/Work";

function App() {
	return (
		<>
			<div className="app">
				<NavBar />
				<Header />
				<About />
				<Work />
			</div>
		</>
	);
}

export default App;
