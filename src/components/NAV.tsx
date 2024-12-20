import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

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
		<div
			className={`nav fixed top-0 p-5 w-full h-[30px] z-10 transition-all duration-500 ${
				show ? 'bg-gray-900' : ''
			}`}>
			<div className="nav__contents flex justify-between">
				<img
					onClick={() => history('/')}
					className="nav__logo fixed top-3 left-0 w-[80px] cursor-pointer pl-5"
					src={logo}
					alt="logo"
				/>
				<img
					onClick={() => history('/profile')}
					className="nav__profile fixed top-3 right-5 w-[30px] cursor-pointer"
					src={profile}
					alt="profile"
				/>
			</div>
		</div>
	)
}

export default NAV
