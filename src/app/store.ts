import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import userReducer from '../features/user/userSlice'
import languageReducer from '../features/appConfig/languageSlice'

export const store = configureStore({
	reducer: {
		user: userReducer,
		language: languageReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
