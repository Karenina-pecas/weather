import React from 'react';
import styled from '@emotion/styled';

export default function Condition(props) {
	const Description = styled.h5`
		font-family: helvetica, arial, sans-serif;
		font-size: 1.4em;
		margin-bottom: 13%;
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
	const Time = styled.h5`
		opacity: 70%;
		font-size: 1em;
	`;
	return (
		<div>
			<Description>Description</Description>
			<Temperature>20°</Temperature>
			<Humidity>Humidity:</Humidity>
			<Time>Time</Time>
		</div>
	);
}
