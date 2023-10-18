import logo from './logo.svg';
import './App.css';
import imageSelector from './Components/imgPresentation';

function App() {
	return (
		<div className="App">
			<h1 className="text-3xl font-bold underline">
				Hello. Wanna play a game?
			</h1>

			<imgPresentation imageSelector={imageSelector} />
		</div>
	);
}

export default App;
