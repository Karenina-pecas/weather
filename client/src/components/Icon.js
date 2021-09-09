import React from 'react';
import styled from '@emotion/styled';

export default function Icon(props) {
	const Icon = styled.img`
		width: 80px;
		margin-bottom: -10%;
	`;

	let icon = '';
	switch (props.condition) {
		case 'Clear':
			icon = `../images/sunny.svg`;
			break;
		case 'Clouds':
			icon = `../images/clouds.svg`;
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
	}
	return (
		<div>
			<Icon className='icon' src={icon} alt='Weather Icon' />
		</div>
	);
}
