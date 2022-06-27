import React, { memo } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router'

import './SignUpScreen.css'
import {
	auth,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	googleProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from '../../config'
import googleLogo from '../../assets/images/google.png'
import { AuthSchemaValidation } from '../../utils'
import { AuthRequestType } from '../../types'

export const SignUpScreen = () => {
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
			.then((userCredential) => {
				// Signed in
				const user = userCredential?.user
				history('/')
			})
			.catch((error: any) => {
				const errorCode = error?.code
				const errorMessage = error?.message
				alert(errorMessage)
			})
	}

	const signInWithEmailAndPasswordHandler = (data: AuthRequestType) => {
		console.log(JSON.stringify(data, null, 2))

		signInWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				// signIn successful.
				const user = userCredential.user
				// console.log(user)
				history('/')
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
				alert(errorMessage)
			})
	}

	const signInWithGoogleHandler = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result)
				const token = credential?.accessToken
				// The signed-in user info.
				const user = result?.user

				history('/')
				// console.log(result, user)
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error?.code
				const errorMessage = error?.message
				// The email of the user's account used.
				const email = error.customData.email
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider?.credentialFromError(error)
				alert(errorMessage)
			})
	}

	return (
		<div className="signInScreen">
			<div className="signInScreen__container">
				<form>
					<h1>Sign In</h1>
					<p
						className="is-invalid"
						style={{
							width: '100%',
							textAlign: 'left',
							fontSize: '13px',
							paddingLeft: '5px',
						}}>
						{errors.email ? errors.email?.message : ''}
					</p>
					<input
						id="email"
						placeholder="Email address"
						{...register('email')}
						className={` ${errors.email ? 'is-invalid' : 'input custom-input'}`}
					/>

					<p
						className="is-invalid"
						style={{ width: '100%', textAlign: 'left', fontSize: '13px' }}>
						{errors.password ? errors.password?.message : ''}
					</p>
					<input
						type="password"
						placeholder="Password"
						id="password"
						className={` ${
							errors.password ? 'is-invalid' : 'input custom-input'
						}`}
						{...register('password')}
					/>
					<button
						onClick={handleSubmit(signInWithEmailAndPasswordHandler)}
						type="submit"
						name="submit">
						Sign In
					</button>

					<h4>
						<span className="signupScreen_gray">New to Netflix? </span>
						<span
							onClick={handleSubmit(registerUserWithEmailAndPasswordHandler)}
							className="signupScreen_link">
							Sign up now.
						</span>
					</h4>
				</form>
				<div className="signupScreen_withGoogle">
					<img onClick={signInWithGoogleHandler} src={googleLogo} alt="Logo" />
					<h5 onClick={signInWithGoogleHandler}>Login With Google</h5>
				</div>
			</div>
		</div>
	)
}

export default memo(SignUpScreen)
