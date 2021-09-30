import React from 'react';
import styled from '@emotion/styled';

export default function Location({ city, country }) {
	const Container = styled.div`
		display: flex-flexbox;
		text-align: center;
		font-family: helvetica, arial, sans-serif;
	`;

	const City = styled.h1`
		font-family: helvetica, arial, sans-serif;
	`;

	const Country = styled.h5`
		font-size: 1.2em;
		font-family: helvetica, arial, sans-serif;
		margin-bottom: 5%;
	`;
	return (
		<div>
			<Container>
				<City>{city}</City>
				<Country>{country}</Country>
			</Container>
		</div>
	);
}
