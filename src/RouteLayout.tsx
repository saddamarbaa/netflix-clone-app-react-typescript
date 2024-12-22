import { Navigate, Route, Routes, useLocation } from 'react-router'

import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import SignUpScreen from './screens/SignUpScreen'
import SignInScreen from './screens/SignInScreen'
import NotFoundScreen from './screens/NotFoundScreen'
import PrivateRoute from './components/PrivateRoute'

export default function RouteLayout() {
	const location = useLocation()

	return (
		<Routes key={location.pathname} location={location}>
			{/* Redirect from "/" to "/browser" */}
			<Route path="/" element={<Navigate to="/browser" />} />
			<Route path="/browser" element={<HomeScreen />} />
			<Route path="/profile" element={<PrivateRoute />}>
				<Route path="/profile" element={<ProfileScreen />} />
			</Route>
			<Route path="/sign-up" element={<SignUpScreen />} />
			<Route path="/sign-in" element={<SignInScreen />} />
			<Route path="*" element={<NotFoundScreen />} />
		</Routes>
	)
}
