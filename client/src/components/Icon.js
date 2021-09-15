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
			icon = `sunny.svg`;
			break;
		case 'Clouds':
			icon = `clouds.svg`;
			break;
		case 'Rain':
			icon = `rainy.svg`;
			break;
		case 'Snow':
			icon = `snowing.svg`;
			break;
		case 'Thunderstorm':
			icon = `cloud-lightning.svg`;
			break;
		case 'Drizzle':
			icon = `drizzle.svg`;
			break;
		case 'Tornado':
			icon = `tornado.svg`;
			break;
		case 'Fog':
			icon = `fog.svg`;
			break;
		case 'Default':
			icon = `stars.svg`;
			break;
	}
	return (
		<div>
			<Icon className='icon' src={process.env.PUBLIC_URL + `/images/${icon}`} alt='Weather Icon' />
		</div>
	);
}
//test karenina
