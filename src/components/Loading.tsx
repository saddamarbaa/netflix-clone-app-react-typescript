import { memo } from 'react'

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
						width: '350px',
						height: '350px',
						margin: '0 auto',
						border: '1px solid  #e50914',
						cursor: 'pointer',
					}}>
					<div
						className="logo"
						style={{
							position: 'relative',
							cursor: 'pointer',
							marginBottom: '3rem',
							width: '8rem',
							height: '8rem',
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
					<div className="loader">
						{/* Example with TailwindCSS Spinner */}
						<div className="border-t-4 border-[#e50914] border-opacity-50 rounded-full w-12 h-12 animate-spin"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default memo(SignUpScreen)
