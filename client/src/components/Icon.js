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
			icon = `../images/sunny.svg`;
			break;
		case 'Clouds':
			icon = `https://kareninatech.me/weather/images/clouds.svg`;
			//icon = `../images/clouds.svg`;
			break;
		case 'Rain':
			icon = `../images/rainy.svg`;
			break;
		case 'Snow':
			icon = `../images/snowing.svg`;
			break;
		case 'Thunderstorm':
			icon = `../images/cloud-lightning.svg`;
			break;
		case 'Drizzle':
			icon = `../images/drizzle.svg`;
			break;
		case 'Tornado':
			icon = `../images/tornado.svg`;
			break;
		case 'Fog':
			icon = `../images/fog.svg`;
			break;
		case 'Default':
			icon = `../images/stars.svg`;
			break;
	}
	return (
		<div>
			<Icon className='icon' src={icon} alt='Weather Icon' />
		</div>
	);
}
