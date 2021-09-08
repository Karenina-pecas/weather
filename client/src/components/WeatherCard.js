import React from 'react';
import styled from '@emotion/styled';
import Location from './Location';
import Condition from './Condition';
import Icon from './Icon';

export default function Card(props) {
	const Wrap = styled.div`
		height: 100%;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		align-items: center;
		font-family: helvetica, arial, sans-serif;
	`;
	const Card = styled.div`
		width: 250px;
		height: 400px;
		background: linear-gradient(10deg, rgb(152, 221, 142), rgb(228, 172, 68), rgb(81, 216, 216));
		opacity: 80%;
		align-items: center;
		position: relative;
		text-align: center;
		margin: auto;
		margin-top: 25px;
		display: flex;
		flex-direction: column;
	`;
	return (
		<div>
			<body>
				<Wrap>
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
								<Card>
									<Location />
									<Icon />
									<Condition />
								</Card>
							</div>
						</div>
					</main>
				</Wrap>
			</body>
		</div>
	);
}
