import './index.css';
import WeatherCard from './components/WeatherCard';

import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
require('dotenv').config();
const apiKey = process.env.WEATHER_API_KEY;

function App() {
	const Weather = styled.h1`
		font-family: helvetica, arial, sans-serif;
	`;
	const Location = styled.div`
		margin-left: 48px;
		margin-bottom: 3%;
		grid-column: 2;
		grid-row: 2;
		font-family: helvetica, arial, sans-serif;
	`;
	const Err = styled.span`
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		font-style: italic;
		font-size: 0.6em;
		text-align: center;
		margin-left: 35px;
	`;

	const [city, setCity] = useState('Tampico');
	const [cityName, setCityName] = useState('');
	const [country, setCountry] = useState('');
	const [condition, setCondition] = useState('');
	const [temp, setTemp] = useState(0);
	const [humidity, setHumidiy] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		getWeather();
	}, []);
	const handleChange = (e) => {
		const value = e.target.value;
		setCity(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getWeather();
	};

	const getWeather = async () => {
		try {
			setError('');
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c045c1dbbb951593e7270196784c765&units=metric`
			);

			const data = await response.json();
			if (!response.ok) throw data;

			setCityName(data.name);
			setCountry(data.sys.country);
			setTemp(data.main.temp);
			setCondition(data.weather[0].main);
			setHumidiy(data.main.humidity);
		} catch (error) {
			setError(error.message);
		}
	};

	const temperature = () => {
		return Math.trunc(temp);
	};

	return (
		<div className='App'>
			<header className='full-screen-header'>
				<div className='box'>
					<div className='logo-p'>
						<img className='logo' src='/logo.png' alt='logo' />
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

						{error && <Err>{error}</Err>}
					</form>
				</div>
			</header>

			<WeatherCard
				city={cityName}
				country={country}
				temp={temperature()}
				condition={condition}
				humidity={humidity}
			/>
		</div>
	);
}

export default App;
