import React from 'react';
import styled from '@emotion/styled';
import Location from './Location';
import Condition from './Condition';
import Icon from './Icon';

export default function Card({ temp, condition, city, country, humidity, time }) {
	let highColor = 0;
	let lowColor = 0;
	let bg = null;
	if (temp > 12) {
		//This is for hot color
		highColor = (1 - (temp - 12) / 28) * 255;
		lowColor = highColor - 150;
		bg = `linear-gradient(
			10deg,
			rgb(255, ${highColor}, 100),
			rgb(255, 172, 68),
			rgb(255, ${lowColor}, 0))`;
	} else if (+temp <= 12) {
		//This is for cold color
		highColor = (1 - (temp - 12) / 28) * 255;
		lowColor = highColor - 150;
		bg = `linear-gradient(
			10deg,
			rgb(0, ${highColor}, 255),
			rgb(126, 242, 252),
			rgb(88, ${lowColor}, 188))
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
					<main className='full-screen-main zoomed'>
						<div id='media-viewer'>
							<div className='square-background'>
								<Card>
									<Location city={city} country={country} />
									<Icon condition={condition} />
									<Condition temp={temp} condition={condition} humidity={humidity} time={time} />
								</Card>
							</div>
						</div>
					</main>
				</Wrap>
			</body>
		</div>
	);
}
