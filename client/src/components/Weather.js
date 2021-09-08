import React, { useState, useEffect } from 'react';

export default function Weather() {
	// const [loading, setLoading] = useState(false);
	// const [location, setLocation] = useState('');
	// const [weather, setWeather] = useState(null);
	// const [error, setError] = useState('');
	// const [myTime, setMyTime] = useState(new Date());
	// const [time, setTime] = useState(null);

	// useEffect(() => {
	// 	let timer = setInterval(() => setMyTime(new Date()), 1000);
	// 	return function cleanup() {
	// 		clearInterval(timer);
	// 	};
	// });

	// const handleChange = (e) => {
	// 	setLocation(e.target.value);
	// };

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	getWeather();
	// 	setLoading(true);
	// };

	// const getWeather = async () => {
	// 	try {
	// 		setLoading(true);
	// 		const response = await fetch(
	// 			`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5fdfb8a76dc35568f5b391b0a4be08a3&units=metric`
	// 		);

	// 		const data = await response.json();
	// 		if (!response.ok) throw data;

	// 		setWeather(data);
	// 		setTime(data.timezone);
	// 	} catch (error) {
	// 		setError(error.message);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	return (
		<div>
			<body>
				<div id='wrap'>
					<header className='full-screen-header'>
						<div className='box'>
							<div className='logo-p'>
								<img className='logo' src='logo.png' alt='logo' />
							</div>
							<h1>Weather</h1>
							<form>
								<div id='city-label'>
									<label for='city'>City</label>
								</div>
								<div className='city-input'>
									<input type='text' id='city-input' name='city'></input>
								</div>
							</form>
						</div>
					</header>
					<main className='full-screen-main zoomed'>
						<div id='media-viewer'>
							<div className='square-background'>
								<div className='main-square'>
									<div className='location'>
										<h2 className='city'>City</h2>
										<h5 className='country'>CT</h5>
									</div>
									<img className='icon' src='../images/sunny.svg' />
									<h5 className='description'>Description</h5>
									<h1 className='temp'>20°</h1>
									<h5 className='humidity'>Humidity:</h5>
									<h5 className='time'>Time</h5>
								</div>
							</div>
						</div>
					</main>
				</div>
			</body>
		</div>
	);
}
