import React, { memo, useState } from 'react'

import logo from '../../assets/images/logo.png'
import './LoginScreen.css'
import SignUpScreen from '../signUpScreen/SignUpScreen'

export const LoginScreen = () => {
	const [signIn, setSignIn] = useState(false)

	return (
		<div className="LoginScreen">
			<div className="LoginScreen__background">
				<img className="LoginScreen__logo" src={`${logo}`} alt="netflix img" />
			</div>
			<button onClick={() => setSignIn(true)} className="loginScreen__button">
				Sign In
			</button>
			<div className="loginScreen__gradient"></div>
			<div className="loginScreen__body--Wrapper">
				<div className="loginScreen__body">
					{signIn ? (
						<SignUpScreen />
					) : (
						<>
							<h1>Unlimited movies, TV shows, and more.</h1>
							<h2>Watch anywhere. Cancel anytime.</h2>
							<h3>
								Ready to watch? Enter your email to create or restart your
								membership.
							</h3>
							<div className="loginScreen__input">
								<form>
									<input type="email" placeholder="Email address" />
									<button
										onClick={() => setSignIn(true)}
										type="submit"
										className="loginScreen__getStarted">
										GET STARTED
									</button>
								</form>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default memo(LoginScreen)
