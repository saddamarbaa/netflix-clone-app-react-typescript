import { useNavigate } from 'react-router'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import NAV from '../../components/NAV'
import './ProfileScreen.css'
import profile from '../../assets/images/profile__logo.png'
import { auth, signOut } from '../../config'
import { selectUser } from '../../features/user/userSlice'
import { getTime } from '../../utils'

export const ProfileScreen = () => {
	const user = useSelector(selectUser)
	const history = useNavigate()

	console.log(user)
	// Sign out Function
	const logOutHandler = () => {
		if (user) {
			signOut(auth)
				.then(() => {
					history('/login')
					// Sign-out successful.
				})
				.catch((error: any) => {
					const errorMessage = error?.message
					alert(errorMessage)
				})
		}
	}

	return (
		<div className="profileScreen">
			<NAV />
			<div className="profileScreen__body">
				<h1>Edit Profile</h1>
				<div className="profileScreen__info">
					<img src={profile} alt="logo" />
					<div className="profileScreen__details">
						<h2>
							<input type="text" placeholder={user?.email} />
						</h2>

						<div className="profileScreen__plans">
							<h3>Plans (Current Plan: Premium)</h3>
							<p className="profileScreen__plans--date">
								Renewal date: {getTime()}
							</p>

							<div className="profileScreen__plans--plan">
								<p>
									Netflix Standard <br />
									<span>1080p</span>
								</p>
								<button
									onClick={() => {
										history('/')
									}}>
									Subscribe
								</button>
							</div>
							<div className="profileScreen__plans--plan">
								<p>
									Netflix Basic <br />
									<span>480p</span>
								</p>
								<button
									onClick={() => {
										history('/')
									}}>
									Subscribe
								</button>
							</div>
							<div className="profileScreen__plans--plan">
								<p>
									Netflix Premium <br />
									<span>4k+HDR</span>
								</p>
								<button
									onClick={() => {
										history('/')
									}}
									className="profileScreen__plans--Premium">
									Current Package
								</button>
							</div>

							<button
								onClick={logOutHandler}
								className="profileScreen__signOut">
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default memo(ProfileScreen)
