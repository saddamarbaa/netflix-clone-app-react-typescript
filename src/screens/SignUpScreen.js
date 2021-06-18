/** @format */

import React, { memo, useRef } from "react";
import "./SignUpScreen.css";
import { auth, provider } from "../config/firebase";
import googleLogo from "../images/google.png";

const SignUpScreen = () => {
	const emailReference = useRef(null);
	const passwordReference = useRef(null);

	//  Function to Create User with given name and password
	const registerUserWithEmailAndPasswordHandler = (event) => {
		event.preventDefault();
		auth
			.createUserWithEmailAndPassword(
				emailReference.current.value,
				passwordReference.current.value,
			)
			.then((registeredUser) => {
				// Registered successful.
				// console.log(registeredUser);
			})
			.catch((error) => {
				// An error happened.
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage);
			});
	};

	const signInWithEmailAndPasswordHandler = (event) => {
		event.preventDefault();
		auth
			.signInWithEmailAndPassword(
				emailReference.current.value,
				passwordReference.current.value,
			)
			.then((signInedUser) => {
				// signIn successful.
				// console.log(signInedUser);
			})
			.catch((error) => {
				// An error happened.
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage);
			});
	};

	const signInWithGoogleHandler = () => {
		auth
			.signInWithPopup(provider)
			.then((signInedUser) => {
				// signIn successful.
				// console.log(signInedUser);
			})
			.catch((error) => {
				// An error happened.
				// console.log(error);
			});
	};

	return (
		<div className='signInScreen'>
			<div className='signInScreen__container'>
				<form>
					<h1>Sign In</h1>

					<input
						ref={emailReference}
						type='email'
						id='email'
						name='email'
						placeholder='Email address'
						required
					/>

					<input
						ref={passwordReference}
						type='password'
						placeholder='Password'
						id='password'
						name='password'
						required
					/>
					<button
						onClick={signInWithEmailAndPasswordHandler}
						type='submit'
						name='submit'>
						Sign In
					</button>

					<h4>
						<span className='signupScreen_gray'>New to Netflix? </span>
						<span
							onClick={registerUserWithEmailAndPasswordHandler}
							className='signupScreen_link'>
							Sign up now.
						</span>
					</h4>
				</form>
				<div className='signupScreen_withGoogle'>
					<img
						onClick={signInWithGoogleHandler}
						src={googleLogo}
						alt='Logo'
					/>
					<h5 onClick={signInWithGoogleHandler}>Login With Google</h5>
				</div>
			</div>
		</div>
	);
};

export default memo(SignUpScreen);
