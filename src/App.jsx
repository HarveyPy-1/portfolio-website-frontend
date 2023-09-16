import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
// import About from "./container/About/About";
import Header from "./container/Header/Header";

function App() {
	return (
		<>
			<div className="app">
				<NavBar />
				<Header />
			</div>
		</>
	);
}

export default App;
