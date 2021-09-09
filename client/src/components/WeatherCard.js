import React from 'react';
import styled from '@emotion/styled';
import Location from './Location';
import Condition from './Condition';
import Icon from './Icon';

export default function Card(props) {
	let highColor = 0;
	let lowColor = 0;
	let bg = null;
	if (props.temp > 12) {
		//This is for hot color
		highColor = (1 - (props.temp - 12) / 28) * 255;
		lowColor = highColor - 150;
		bg = `linear-gradient(
			10deg,
			rgb(255, ${highColor}, 100),
			rgb(255, 172, 68),
			rgb(255, ${lowColor}, 0))`;
	} else if (props.temp <= 12) {
		//This is for cold color
		highColor = (1 - (props.temp - 12) / 28) * 255;
		lowColor = highColor - 150;
		bg = `linear-gradient(
			10deg,
			rgb(255, ${highColor}, 100),
			rgb(255, 172, 68),
			rgb(255, ${lowColor}, 0))
		`;
	}

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
		/*152,228, 81 // 221, 172,216// 142,68,216  */
		background: ${bg};
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
