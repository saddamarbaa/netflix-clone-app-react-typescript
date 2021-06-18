/** @format */

import React from "react";
import NAV from "../components/NAV";
import "./ProfileScreen.css";
import profile from "../images/profile__logo.png";
import { useSelector } from "react-redux";
import { selectUser } from "../app/features/user/userSlice";
import { auth } from "../config/firebase";
import { useHistory } from "react-router";
import { memo } from "react";

const ProfileScreen = () => {
	const user = useSelector(selectUser);
	const date = new Date();
	const history = useHistory();

	// Sign out Function
	const logOutHandler = () => {
		auth
			.signOut()
			.then((user) => {
				// console.log("Signed Out");
			})
			.catch((error) => {
				// console.error("Sign Out Error", error);
			});
	};

	function getTime() {
		const today = new Date();

		const date =
			today.getFullYear() +
			"-" +
			(today.getMonth() + 1) +
			"-" +
			today.getDate();

		return date;
	}

	return (
		<div className='profileScreen'>
			<NAV />
			<div className='profileScreen__body'>
				<h1>Edit Profile</h1>
				<div className='profileScreen__info'>
					<img src={profile} alt='logo' />
					<div className='profileScreen__details'>
						<h2>
							<input type='text' placeholder={user.email} />
						</h2>

						<div className='profileScreen__plans'>
							<h3>Plans (Current Plan: Premium)</h3>
							<p className='profileScreen__plans--date'>
								Renewal date: {getTime()}
							</p>

							<div className='profileScreen__plans--plan'>
								<p>
									Netflix Standard <br />
									<span>1080p</span>
								</p>
								<button
									onClick={() => {
										history.push("/");
									}}>
									Subscribe
								</button>
							</div>
							<div className='profileScreen__plans--plan'>
								<p>
									Netflix Basic <br />
									<span>480p</span>
								</p>
								<button
									onClick={() => {
										history.push("/");
									}}>
									Subscribe
								</button>
							</div>
							<div className='profileScreen__plans--plan'>
								<p>
									Netflix Premium <br />
									<span>4k+HDR</span>
								</p>
								<button
									onClick={() => {
										history.push("/");
									}}
									className='profileScreen__plans--Premium'>
									Current Package
								</button>
							</div>

							<button
								onClick={logOutHandler}
								className='profileScreen__signOut'>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(ProfileScreen);
