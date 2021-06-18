/** @format */

import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./config/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setLogInState,
	setLogOutState,
	selectUser,
} from "./app/features/user/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

const App = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser); // grab the user from global state

	// keep user login In
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authenticatedUser) => {
			if (authenticatedUser) {
				// User is signed in,
				// dispatch an action and change the state(save user in the global store)
				dispatch(
					setLogInState({
						uid: authenticatedUser.uid,
						email: authenticatedUser.email,
					}),
				);
				// console.log("authenticated is User object", authenticatedUser);
			} else {
				// User is signed out
				// dispatch an action and change the state(remove a user from  the global store)
				dispatch(setLogOutState());
			}
		});

		return () => {
			unsubscribe();
		};
	}, [dispatch]);

	return (
		<div className='app'>
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Switch>
						<Route path='/' exact>
							<HomeScreen />
						</Route>
						<Route path='/profile' exact>
							<ProfileScreen />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
};

export default App;
