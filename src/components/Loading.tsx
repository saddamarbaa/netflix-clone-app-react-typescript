import React, { memo } from 'react'
// @ts-ignore
import { Circle } from 'better-react-spinkit'

import './Loading.css'
import logo from '../assets/images/logo.png'

export const SignUpScreen = () => {
	return (
		<div className="loadingScreen">
			<div className="loadingScreen__container">
				<div
					style={{
						padding: '75px',
						paddingTop: '00px',
						textAlign: 'center',
						background: 'rgba(0, 0, 0, 0.75)',
						borderRadius: '6px',
						boxShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
						display: 'grid',
						placeItems: 'center',
						width: '210px',
						height: '220px',
						margin: '0 auto',
						border: '1px solid  #e50914',
					}}>
					<div
						className="logo"
						style={{
							position: 'relative',
							cursor: 'pointer',
							marginBottom: '3rem',
							width: '11rem',
							height: '9rem',
							display: 'block',
						}}>
						<img
							style={{
								position: 'relative',
								cursor: 'pointer',
								width: '100%',
								height: '100%',
								objectFit: 'contain',
							}}
							src={logo}
							alt="Picture of the Netflix"
						/>
					</div>
					<div>
						<Circle color="#E6020C" size={60} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default memo(SignUpScreen)
