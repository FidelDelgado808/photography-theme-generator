import './App.css';
import get_random_image from './Components/ImgPresentation';

function App() {
  return (
    <div className='App'>
      <h1 className='text-3xl font-bold underline'>Hello. Wanna play a game?</h1>
      <get_random_image />
    </div>
  );
}

export default App;
