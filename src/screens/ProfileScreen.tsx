import { signOut, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'

import { auth, db } from '../config'
import { getTime } from '../utils'
import profile from '../assets/images/profile__logo.png'
import NAV from '../components/NAV'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FirebaseError } from 'firebase/app'

export default function ProfileScreen() {
	const [user] = useAuthState(auth)
	const [name, setName] = useState(user?.displayName || '')
	const [email, setEmail] = useState(user?.email || '')
	const history = useNavigate()

	console.log('current user ' + user?.displayName)

	// Sign out Function
	const logOutHandler = () => {
		if (user) {
			signOut(auth)
				.then(() => {
					history('/sign-in')
				})
				.catch((error) => {
					const errorMessage = error?.message
					alert(errorMessage)
				})
		}
	}

	const updateProfileHandler = async () => {
		if (!name || !email) {
			alert('Please provide both name and email to update your profile.')
			return
		}

		const data = { name: name }
		console.log(
			'Attempting to update profile with data:',
			JSON.stringify(data, null, 2),
		)

		try {
			if (user) {
				if (user.displayName !== data.name) {
					console.log('Updating display name to:', data.name)
					await updateProfile(user, { displayName: data.name })
					console.log('Display name updated successfully.')

					alert('successfully update your profile.')

					// Update name in Firestore
					const docRef = doc(db, 'users', user.uid)
					await updateDoc(docRef, { name: data.name })
					console.log('User name updated in Firestore.')
				} else {
					console.log('No change in display name; skipping update.')
				}
			} else {
				console.warn('No user is currently signed in.')
			}
		} catch (error) {
			const firebaseError = error as FirebaseError
			const errorCode = firebaseError?.code
			const errorMessage = firebaseError?.message

			console.error(
				`Error updating profile: ${errorMessage} (Code: ${errorCode})`,
			)
			alert(`An error occurred while updating your profile: ${errorMessage}`)
		}
	}

	return (
		<div className="min-h-screen bg-black text-white">
			<NAV />
			<div className="flex flex-col w-11/12 sm:w-3/4 lg:w-1/2 mx-auto pt-16 max-w-4xl">
				<h1 className="text-5xl font-semibold border-b border-gray-700 mb-5 p-3">
					Edit Profile
				</h1>
				<div className="flex">
					<img src={profile} alt="logo" className="h-24" />
					<div className="ml-6 flex-1">
						<h2>
							{/* Name input */}
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="w-full bg-gray-600 text-white px-5 py-3 text-lg border-none outline-none transition-all duration-300 placeholder-white focus:border-b-2 focus:border-yellow-500"
								placeholder={'Enter your name'}
							/>
						</h2>

						<h2 className="mt-5">
							<input
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full bg-gray-600 text-white px-5 py-3 text-lg border-none outline-none transition-all duration-300 placeholder-white focus:border-b-2 focus:border-yellow-500"
								placeholder={'Enter your email'}
							/>
						</h2>

						<div className="mt-5 opacity-80 hover:opacity-100">
							<h3 className="border-b border-gray-700 pb-2">
								Plans (Current Plan: Premium)
							</h3>
							<p className="mt-2">Renewal date: {getTime()}</p>

							{/* Plan Options */}
							<div className="flex justify-between mt-6 mb-6">
								<p>
									Netflix Standard <br />
									<span>1080p</span>
								</p>
								<button
									onClick={() => history('/')}
									className="bg-[#e50914] hover:bg-[#b20710] transition cursor-pointer duration-200 text-white px-4 py-2 rounded-md">
									Subscribe
								</button>
							</div>

							<div className="flex justify-between mb-6">
								<p>
									Netflix Basic <br />
									<span>480p</span>
								</p>
								<button
									onClick={() => history('/')}
									className="bg-[#e50914] hover:bg-[#b20710] transition cursor-pointer duration-200 text-white px-4 py-2 rounded-md">
									Subscribe
								</button>
							</div>

							<div className="flex justify-between mb-6">
								<p>
									Netflix Premium <br />
									<span>4k+HDR</span>
								</p>
								<button
									onClick={() => history('/')}
									className="bg-gray-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-500 transition duration-200">
									Current Package
								</button>
							</div>

							{/* Button to update profile */}
							<button
								onClick={updateProfileHandler}
								className="bg-[#0F7E80] hover:bg-[#0c6869] transition cursor-pointer duration-200 text-white py-4 px-5 text-lg font-semibold rounded-md w-full mt-6">
								Update Profile
							</button>

							{/* Button to Sign out */}
							<button
								onClick={logOutHandler}
								className="bg-[#e50914] hover:bg-[#b20710] transition cursor-pointer duration-200 text-white py-4 px-5 text-lg font-semibold rounded-md w-full mt-6">
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
