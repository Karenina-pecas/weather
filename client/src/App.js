import './index.css';
import WeatherCard from './components/WeatherCard';

function App() {
	return (
		<div className='App'>
			<WeatherCard city='Tampico' country='MX' temp={-10} condition='Clouds' humidity='30%' time='4.20' />
		</div>
	);
}

export default App;
