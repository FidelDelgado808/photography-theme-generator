import logo from './logo.svg';
import './App.css';

function App() {
	const imageSelector = {
		img1: 'https://lp-cms-production.imgix.net/image_browser/NEMO%20science%20museum%20Amsterdam.jpg?auto=format&q=75',
		img2: 'https://lp-cms-production.imgix.net/image_browser/MAS%20Museum%20Antwerp.jpg?auto=format&q=75',
		img3: 'https://lp-cms-production.imgix.net/image_browser/The%20Pompidou%20Centre.jpg?auto=format&q=75',
		img4: 'https://www.thewowstyle.com/wp-content/uploads/2015/02/1.Landscape-Photography.jpg',
		img5: 'https://www.thewowstyle.com/wp-content/uploads/2015/02/Heybridge-735702.jpg',
	};

	return (
		<div className="App">
			<h1 className="text-3xl font-bold underline">
				Hello. Wanna play a game?
			</h1>
		</div>
	);
}

export default App;
