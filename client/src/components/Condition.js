import React from 'react';
import styled from '@emotion/styled';

export default function Condition({ temp, condition, humidity, tempMax, tempMin }) {
	const Description = styled.h5`
		font-family: helvetica, arial, sans-serif;
		font-size: 1.4em;
		margin-bottom: 10%;
	`;

	const Temperature = styled.h1`
		font-family: helvetica, arial, sans-serif;
		font-size: 2em;
		margin-top: -10%;
	`;
	const Humidity = styled.h5`
		font-family: helvetica, arial, sans-serif;
		font-size: 1.2em;
		margin-bottom: -6%;
		opacity: 70%;
	`;
	const Max = styled.h5`
		font-family: helvetica, arial, sans-serif;
		font-size: 2em;
		opacity: 70%;
	`;

	const Min = styled.h5`
		font-family: helvetica, arial, sans-serif;
		font-size: 2em;
		opacity: 70%;
	`;

	return (
		<div>
			<Description>{condition}</Description>
			<Temperature>{temp}C°</Temperature>
			<Humidity>Humidity: {humidity}%</Humidity>
			<div className='flex'>
				Max: <Max>{tempMax} </Max>
				Min: <Min> {tempMin}</Min>
			</div>
		</div>
	);
}
