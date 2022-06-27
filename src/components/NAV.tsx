import React, { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import './NAV.css'
import logo from '../assets/images/logo.png'
import profile from '../assets/images/profile__logo.png'

const NAV = () => {
	const history = useNavigate()

	const [show, handleShowNav] = useState(false)

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShowNav(true)
		} else {
			handleShowNav(false)
		}
	}

	// add scroll EventListener and call transitionNavBar() function
	// (Show/hide scrollbar)
	// the code will run only when the component found
	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar)

		// cleanup after done clean up
		return () => window.removeEventListener('scroll', transitionNavBar)
	}, [])

	return (
		// (add or render nav__black to the website) only if the show variable is true
		<div className={`nav ${show && 'nav__black'}`}>
			<div className="nav__contents">
				<img
					onClick={() => {
						history('/')
					}}
					className="nav__logo"
					src={logo}
					alt="logo"
				/>
				<img
					onClick={() => {
						history('/profile')
					}}
					className="nav__profile"
					src={profile}
					alt="profile"
				/>
			</div>
		</div>
	)
}

export default memo(NAV)
