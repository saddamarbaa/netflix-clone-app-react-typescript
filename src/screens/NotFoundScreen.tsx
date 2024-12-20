import { Link } from 'react-router'

export default function NotFoundScreen() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
			<div className="text-center p-6 bg-white bg-opacity-75 rounded-lg shadow-lg max-w-md w-full">
				<h1 className="text-5xl font-extrabold text-gray-800">Oops!</h1>
				<p className="mt-4 text-lg text-gray-600">
					We're sorry, the page you requested could not be found. Please go back
					to the homepage or contact us.
				</p>
				<Link
					to="/"
					className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
					Go back
				</Link>
			</div>
		</div>
	)
}
