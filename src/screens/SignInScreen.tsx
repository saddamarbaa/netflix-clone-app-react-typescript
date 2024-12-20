import { useState } from 'react'
import SignUpScreen from './SignUpScreen'

import logo from '../assets/images/logo.png'

export default function SignInScreen() {
	const [signIn, setSignIn] = useState(false)
	const [email, setEmail] = useState('')

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (!email) {
			alert('Please enter a valid email address.')
		} else {
			setSignIn(true)
		}
	}

	return (
		<div className="relative overflow-x-hidden h-full min-h-full w-[100vw]  bg-[url('../assets/images/backgroundImage.jpg')] bg-center bg-cover bg-no-repeat  overflow-hidden">
			<div className="LoginScreen__background">
				<img
					className="fixed top-[25px] w-[120px] object-contain max-h-[150px] ml-6"
					src={`${logo}`}
					alt="netflix img"
				/>
			</div>
			<button
				onClick={() => setSignIn(true)}
				className="fixed top-6 right-6 py-2 px-5 text-white bg-[#e50914] rounded-lg cursor-pointer font-semibold text-base transform transition duration-300 hover:scale-105 hover:bg-[#b20710]">
				Sign In
			</button>
			{/* <div className="loginScreen__gradient"></div> */}
			<div className="w-full h-screen z-10 bg-black bg-opacity-40 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
			<div className="absolute top-[15%] w-full p-5 z-10 flex justify-center">
				<div className=" text-center text-white w-full  m-0 mx-auto p-[75px] my-auto ">
					{signIn ? (
						<SignUpScreen />
					) : (
						<>
							<h1 className="text-[1.8rem] md:text-[3.125rem] max-w-[640px] my-0 mx-auto mb-4 md:mb-5">
								Unlimited movies, TV shows, and more.
							</h1>
							<h2 className="max-w-[640px] text-lg md:text-[1.625rem]  mx-auto mb-4 md:mb-5">
								Watch anywhere. Cancel anytime.
							</h2>
							<h3 className="mb-4 md:mb-5 text-lg">
								Ready to watch? Enter your email to create or restart your
								membership.
							</h3>

							<div className="px-4">
								<form onSubmit={handleSubmit}>
									<input
										placeholder="Email address"
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="w-[90%] block md:w-[55%] mb-5 md:mb-0 md:inline-block box-border text-base rounded-sm min-h-[40px] p-[16px_20px]  max-w-[600px] outline-none text-black border-transparent hover:border-[#e50914] border-b-[1px] transition duration-300"
									/>
									<button
										type="submit"
										className="w-[90%] block md:w-fit md:inline-block box-border text-base rounded-sm min-h-[40px] p-[16px_20px] border-none  duration-400  text-white  bg-[#e50914]  hover:bg-[#b20710] transition-colors duration-300 font-semibold cursor-pointer">
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
