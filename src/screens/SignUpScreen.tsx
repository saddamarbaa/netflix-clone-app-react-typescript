/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router'

import { AuthRequestType } from '../types'
import { AuthSchemaValidation } from '../utils'
import {
	auth,
	createUserWithEmailAndPassword,
	// GoogleAuthProvider,
	googleProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from '../config'
import googleLogo from '../assets/images/google.png'

export default function SignUpScreen() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthRequestType>({
		resolver: yupResolver(AuthSchemaValidation),
	})

	const history = useNavigate()

	//  Function to Create User with given name and password
	const registerUserWithEmailAndPasswordHandler = (data: AuthRequestType) => {
		console.log(JSON.stringify(data, null, 2))

		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then(() => {
				// Signed in
				history('/')
			})
			.catch((error) => {
				const errorMessage = error?.message
				alert(errorMessage)
			})
	}

	const signInWithEmailAndPasswordHandler = (data: AuthRequestType) => {
		console.log(JSON.stringify(data, null, 2))

		signInWithEmailAndPassword(auth, data.email, data.password)
			.then((_userCredential) => {
				// signIn successful.
				// console.log(user)
				history('/')
			})
			.catch((error) => {
				const errorMessage = error.message
				alert(errorMessage)
			})
	}

	const signInWithGoogleHandler = () => {
		signInWithPopup(auth, googleProvider)
			.then((_result) => {
				history('/')
				// console.log(result, user)
			})
			.catch((error) => {
				// Handle Errors here.
				const errorMessage = error?.message
				// The email of the user's account used.
				// The AuthCredential type that was used.
				alert(errorMessage)
			})
	}

	return (
		<div className="absolute top-8 left-0 right-0 w-full h-[100vh]  max-h-[100vh] flex justify-center ">
			<div
				className="bg-black bg-opacity-75 p-9 rounded w-[400px] max-w-[350px] h-fit"
				style={{
					backgroundColor: 'rgba(0, 0, 0, 0.75)',
				}}>
				<form className="flex flex-col items-center w-full">
					<h1 className="text-2xl text-left mb-8 font-bold mt-0">Sign In</h1>
					{errors.email && (
						<p className="w-full text-left text-xs text-red-500 mb-2">
							{errors.email.message}
						</p>
					)}
					<input
						id="email"
						placeholder="Email address"
						{...register('email')}
						className={` min-h-[50px] border-0 w-full max-w-full mb-[19px] mt-[3px] p-[16px_20px] box-border text-white bg-[#333]  duration-400 rounded-[5px] outline-none transition duration-300 ${
							errors.email ? 'border border-red-500' : ''
						}`}
						aria-invalid={errors.email ? 'true' : 'false'}
						aria-describedby="email-error"
					/>
					{errors.password && (
						<p className="w-full text-left text-xs text-red-500 mb-2">
							{errors.password.message}
						</p>
					)}
					<input
						type="password"
						placeholder="Password"
						id="password"
						className={`w-full mb-5 p-4 text-white bg-[#333] border border-transparent rounded-md focus:outline-none  transition duration-300 ${
							errors.password ? 'border-red-500' : ''
						}`}
						{...register('password')}
						aria-invalid={errors.password ? 'true' : 'false'}
						aria-describedby="password-error"
					/>
					<button
						onClick={handleSubmit(signInWithEmailAndPasswordHandler)}
						type="submit"
						name="submit"
						className="w-full p-4 text-white bg-[#e50914] font-semibold rounded-md hover:bg-[#b20710] transition duration-300">
						Sign In
					</button>
					<h4 className="w-full text-center text-lg font-semibold mt-4">
						<span className="text-[#737373]">New to Netflix? </span>
						<span
							onClick={handleSubmit(registerUserWithEmailAndPasswordHandler)}
							className="cursor-pointer underline text-white">
							Sign up now
						</span>
					</h4>
				</form>
				<div className="flex items-center text-[#737373] text-[16px] font-medium cursor-pointer justify-center mt-4">
					<img
						onClick={signInWithGoogleHandler}
						src={googleLogo}
						alt="Google Logo"
						className="w-8 h-8 mr-3"
					/>
					<h5
						onClick={signInWithGoogleHandler}
						className="underline text-lg font-semibold text-[#737373] ">
						Login With Google
					</h5>
				</div>
			</div>
		</div>
	)
}
