import React from 'react';
import styled from '@emotion/styled';

export default function Icon({ condition }) {
	const Icon = styled.img`
		width: 80px;
		margin-bottom: -16px;
	`;

	let icon = '';
	switch (condition) {
		case 'Clear':
			icon = `weather/images/sunny.svg`;
			break;
		case 'Clouds':
			icon = `weather/images/clouds.svg`;
			break;
		case 'Rain':
			icon = `weather/images/rainy.svg`;
			break;
		case 'Snow':
			icon = `weather/images/snowing.svg`;
			break;
		case 'Thunderstorm':
			icon = `weather/images/cloud-lightning.svg`;
			break;
		case 'Drizzle':
			icon = `weather/images/drizzle.svg`;
			break;
		case 'Tornado':
			icon = `weather/images/tornado.svg`;
			break;
		case 'Fog':
			icon = `weather/images/fog.svg`;
			break;
		case 'Default':
			icon = `weather/images/stars.svg`;
			break;
	}
	return (
		<div>
			<Icon className='icon' src={process.env.PUBLIC_URL + `${icon}`} alt='Weather Icon' />
		</div>
	);
}
