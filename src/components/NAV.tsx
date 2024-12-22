import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import logo from '../assets/images/logo.png'
import profile from '../assets/images/profile__logo.png'

const Nav = () => {
	const history = useNavigate()
	const [show, handleShowNav] = useState(false)

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShowNav(true)
		} else {
			handleShowNav(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar)

		// cleanup after done clean up
		return () => window.removeEventListener('scroll', transitionNavBar)
	}, [])

	return (
		<div
			className={`nav fixed top-0 p-5 w-full h-[30px] z-10 transition-all duration-500 ${
				show ? 'bg-gray-900 h-[40px]' : ''
			}`}>
			<div className="nav__contents flex justify-between cursor-pointer">
				<img
					onClick={() => history('/')}
					className="fixed top-3 left-0 w-[95px] pl-5 cursor-pointer"
					src={logo}
					alt="logo"
				/>
				<div className="fixed top-3 right-5">
					<img
						onClick={() => history('/profile')}
						className=" w-[30px] cursor-pointer"
						src={profile}
						alt="profile"
					/>
				</div>
			</div>
		</div>
	)
}

export default Nav
