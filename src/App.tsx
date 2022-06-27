import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import HomeScreen from './screens/homeScreen/HomeScreen'
import ProfileScreen from './screens/profileScreen/ProfileScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import { auth } from './config'
import { useAppDispatch } from './app/hooks'
import { setLogInState, setLogOutState } from './features/user/userSlice'
import Loading from './components/Loading'

function App() {
	const dispatch = useAppDispatch()
	const [user, loading, error] = useAuthState(auth)
	// console.log(user, loading)

	useEffect(() => {
		if ((user && user?.email) || user?.displayName || user?.uid) {
			const splitName = user?.email && user?.email.split('@')
			dispatch(
				setLogInState({
					displayName: user?.displayName || (splitName && splitName[0]) || '',
					email: user?.email || user?.displayName || '',
					uid: user.uid,
				}),
			)
		} else {
			dispatch(setLogOutState())
		}
	}, [user])

	if (loading) {
		return <Loading />
	}

	return (
		<>
			{user ? (
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/login" element={<LoginScreen />} />
					<Route path="/profile" element={<ProfileScreen />} />
				</Routes>
			) : (
				<LoginScreen />
			)}
		</>
	)
}

export default App
