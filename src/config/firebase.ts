// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app'
import {
	updateProfile,
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'
const googleProvider = new GoogleAuthProvider()
console.log()

const firebaseConfig = {
	// apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
	// authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
	// projectId: import.meta.env.REACT_APP_PROJECT_ID,
	// storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
	// messagingSenderId: import.meta.env.REACT_APP_MESSAIN_SENDER_ID,
	// appId: import.meta.env.REACT_APP_APPID,

	apiKey: 'AIzaSyDYMtLgrfLKwYXGbBiSKloyzN5c8QiDZBo',

	authDomain: 'ecommerce-a6301.firebaseapp.com',

	projectId: 'ecommerce-a6301',

	storageBucket: 'ecommerce-a6301.appspot.com',

	messagingSenderId: '86853033296',

	appId: '1:86853033296:web:b857d9f1f2354a71cda055',
}

// Initialize Firebase
export const app =
	getApps().length > 0 ? getApps() : initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()

export {
	auth,
	db,
	GoogleAuthProvider,
	googleProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	updateProfile,
}
