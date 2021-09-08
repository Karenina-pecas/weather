import React from 'react';
import styled from '@emotion/styled';

export default function Icon(props) {
	const Icon = styled.img`
		width: 80px;
		margin-bottom: -10%;
	`;
	return (
		<div>
			<Icon className='icon' src='../images/sunny.svg' />
		</div>
	);
}
