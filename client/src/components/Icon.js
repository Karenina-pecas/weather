import React from 'react';
import styled from '@emotion/styled';
import sunny from '../images/sunny.svg';
import clouds from '../images/clouds.svg';
import rainy from '../images/rainy.svg';
import snowing from '../images/snowing.svg';
// import cloudlightning from '../images/cloud-lightning.svg';
import drizzle from '../images/drizzle.svg';
import tornado from '../images/tornado.svg';
import fog from '../images/fog.svg';
import stars from '../images/stars.svg';

export default function Icon({ condition }) {
	const Icon = styled.img`
		width: 80px;
		margin-bottom: -16px;
	`;

	let icon = '';
	switch (condition) {
		case 'Clear':
			icon = sunny;
			break;
		case 'Clouds':
			icon = clouds;
			break;
		case 'Rain':
			icon = rainy;
			break;
		case 'Snow':
			icon = snowing;
			break;
		// case 'Thunderstorm':
		// 	icon = cloudlightning;
		// 	break;
		case 'Drizzle':
			icon = drizzle;
			break;
		case 'Tornado':
			icon = tornado;
			break;
		case 'Fog':
			icon = fog;
			break;
		case 'Default':
			icon = stars;
			break;
	}
	return (
		<div>
			<Icon className='icon' src={icon} alt='Weather Icon' />
		</div>
	);
}
//test karenina
