import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import logo from '../assets/images/logo.png'
import profile from '../assets/images/profile__logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { setLanguage } from '../features/appConfig/languageSlice'
import { SUPPORTED_LANGUAGES } from '../constants'

interface NAVProps {
	handleGptSearch?: () => void
	isChatGptSearch?: boolean
}

const NAV = ({ handleGptSearch, isChatGptSearch }: NAVProps) => {
	const dispatch = useDispatch()
	const { selectedLanguage } = useSelector((state: RootState) => state.language)

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

	// Change language function
	const changeLanguage = (language: string) => {
		dispatch(setLanguage(language))
	}

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
				<div className="fixed top-3 right-5 flex items-center space-x-6 cursor-pointer">
					<div className="language-select  ">
						<select
							value={selectedLanguage}
							onChange={(e) => changeLanguage(e.target.value)}
							className="py-3 px-4 rounded-md text-sm outline-none font-bold">
							{SUPPORTED_LANGUAGES.map((lang) => (
								<option key={lang.identifier} value={lang.identifier}>
									{lang.name}
								</option>
							))}
						</select>
					</div>

					{/* Search Button */}
					{handleGptSearch ? (
						<div>
							<button
								onClick={handleGptSearch}
								className={`py-2 px-6 text-white rounded-lg font-semibold text-lg transform transition-all duration-300 ease-in-out ${
									isChatGptSearch
										? 'bg-[#b20710] hover:bg-[#e50914] shadow-xl'
										: 'bg-[#e50914] hover:bg-[#b20710] shadow-md'
								} hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e50914]`}>
								{isChatGptSearch ? 'Back to Movies' : 'ChatGPT Search'}
							</button>
						</div>
					) : null}

					<div>
						<img
							onClick={() => history('/profile')}
							className="w-[35px] cursor-pointer"
							src={profile}
							alt="profile"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NAV
