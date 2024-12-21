import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'

import { useAppDispatch } from './app/hooks'
import RouteLayout from './RouteLayout'
import { auth } from './config'
import { setLogInState, setLogOutState } from './features/user/userSlice'
import Loading from './components/Loading'

export default function App() {
	const dispatch = useAppDispatch()
	const [user, loading] = useAuthState(auth)
	// console.log(user, loading)
	console.log(import.meta.env.VITE_KEY)

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

	return <RouteLayout />
}
