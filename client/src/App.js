import './index.css';
import WeatherCard from './components/WeatherCard';
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';

function App() {
	const Weather = styled.h1`
		font-family: helvetica, arial, sans-serif;
	`;
	const Location = styled.div`
		margin-left: 40px;
		margin-bottom: 3%;
		grid-column: 2;
		grid-row: 2;
		font-family: helvetica, arial, sans-serif;
	`;

	const [city, setCity] = useState('');
	const [weather, setWeather] = useState(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const value = e.target.value;
		setCity(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getWeather();
		setLoading(true);
	};

	const getWeather = async () => {
		try {
			setLoading(true);
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5fdfb8a76dc35568f5b391b0a4be08a3&units=metric`
			);

			const data = await response.json();
			if (!response.ok) throw data;

			setWeather(data);
			console.log(data);
			// setTime(data.timezone);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className='App'>
			<header className='full-screen-header'>
				<div className='box'>
					<div className='logo-p'>
						<img className='logo' src='logo.png' alt='logo' />
					</div>
					<Weather>Weather</Weather>
					<form onSubmit={(e) => handleSubmit(e)}>
						<Location>
							<label for='city'>City</label>
						</Location>
						<div className='city-input'>
							<input
								onChange={(e) => handleChange(e)}
								value={city}
								type='text'
								id='city-input'
								name='city'></input>
						</div>
					</form>
				</div>
			</header>
			<WeatherCard city='' country='MX' temp={-10} condition='Clouds' humidity='30%' time='4.20' />
		</div>
	);
}

export default App;
