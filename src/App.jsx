import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import About from "./container/About/About"

function App() {
	return (
		<>
			<div className="app">
				<NavBar />
        <About />
			</div>
		</>
	);
}

export default App;
