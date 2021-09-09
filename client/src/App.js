import './index.css';
import WeatherCard from './components/WeatherCard';

function App() {
	return (
		<div className='App'>
			<WeatherCard temp={20} />
		</div>
	);
}

export default App;
