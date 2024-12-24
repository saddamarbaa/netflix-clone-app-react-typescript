/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { SUPPORTED_LANGUAGES } from '../constants'
import { useSelector } from 'react-redux'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { RootState } from '../app/store'
import { openAIClient } from '../utils/openai'
import axios from 'axios'
import Card from './Card'
import { MovieType } from '../types'
import MovieCard from './MovieCard'
import { useDebounce } from '../custom-hooks'

function ChatGPTSearch() {
	const { selectedLanguage } = useSelector((state: RootState) => state.language)
	const [query, setQuery] = useState<string>('')
	const [results, setResults] = useState<MovieType[]>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)
	const debouncedSearchQuery = useDebounce(query, 200)

	// Handle the search input change
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value)
	}

	const handleSearch = async (e?: React.FormEvent<HTMLFormElement>) => {
		e?.preventDefault()

		const searchQuery = debouncedSearchQuery.trim()
		if (!searchQuery) {
			// Clear results and errors if the input is empty
			setResults([])
			setError(null)
			return
		}

		setLoading(true)
		setError(null)

		try {
			// Construct a dynamic query message for movie recommendations
			const userMessage = `Act as a movie recommendation system and suggest some movies for the query "${searchQuery}". Give only the names of 5 movies, separated by commas like this example: "Breaking Bad, The Shawshank Redemption, The Dark Knight"...`

			// Call the OpenAI API with the constructed user message
			const stream = await openAIClient.chat.completions.create({
				model: 'gpt-3.5-turbo',
				messages: [{ role: 'user', content: userMessage }],
			})

			// Process the stream and extract the result
			const movieRecommendations = stream?.choices[0]?.message?.content
			if (movieRecommendations) {
				const movieNames = movieRecommendations
					.toLowerCase()
					.split(',')
					.map((movie: string) => movie.trim())

				// Fetch movies from TMDb based on the received movie names
				await fetchMoviesFromTMDb(movieNames)
			} else {
				// If OpenAI doesn't return movie recommendations, fallback to TMDb API
				await fetchMoviesFromTMDb([searchQuery])
			}
		} catch (error: any) {
			console.error('Error fetching search results:', error)
			// @ts-expect-error
			let errorMessage =
				error?.response?.data?.error?.message ||
				error?.message ||
				'Something went wrong. Please try again later.'

			// Handle API-specific errors
			if (
				error?.response?.status === 429 ||
				error?.message?.includes('You exceeded your current quota')
			) {
				errorMessage =
					'It looks like we’re temporarily unavailable due to high traffic. Please try again later.'
				// setError(errorMessage)
				// await fetchMoviesFromTMDb([searchQuery])
			} else {
				// setError(errorMessage)
			}
			await fetchMoviesFromTMDb([searchQuery])
		} finally {
			setLoading(false)
		}
	}

	// Fallback TMDb Search Function
	const fetchMoviesFromTMDb = async (movieNames: string[]) => {
		const tmdbApiKey = import.meta.env.VITE_REACT_APP_TMDB_API_KEY
		if (!tmdbApiKey) {
			console.error('TMDb API Key is missing.')
			return
		}

		try {
			// Create an array of Promises for each movie API request
			const requests = movieNames.map((movieName) =>
				axios
					.get(
						`https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${encodeURIComponent(
							movieName,
						)}&language=${selectedLanguage || 'en-US'}`,
					)
					.catch((error) => {
						console.error(
							`Error fetching movie "${movieName}" from TMDb:`,
							error,
						)
						return null
					}),
			)

			// Execute all requests in parallel with Promise.all
			const responses = await Promise.all(requests)

			// Filter out null (failed requests) and map results to get the movies
			const allMovies: MovieType[] = responses
				.filter((response) => response !== null) // Exclude failed requests
				.map((response) => response!.data.results)
				.flat() // Flatten the array of movie results
				.filter(
					(movie) => movie.poster_path || movie.backdrop_path, // Ensure movie has a valid poster or backdrop
				)

			if (allMovies.length > 0) {
				setResults(allMovies)
			} else {
				setResults([])
				setError('No results found for query. Please try a different search.')
			}
		} catch (error) {
			console.error('Error fetching from TMDb:', error)
			setError('Unable to fetch results from TMDb. Please try again later.')
		}
	}

	useEffect(() => {
		if (debouncedSearchQuery !== '') {
			handleSearch()
		} else {
			setResults([])
			setError(null)
		}
	}, [debouncedSearchQuery])

	return (
		<div className="relative h-full min-h-full w-[100vw] bg-[url('../assets/images/backgroundImage.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
			<div className="w-full h-screen z-10 bg-black bg-opacity-40 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>

			<div className="absolute top-[15%] w-full p-5 z-10 flex justify-center">
				<div className="chatgpt-search-container p-5 w-full flex flex-col items-center gap-8 mx-auto max-w-7xl">
					<form
						className="z-50 top-0 search-bar flex flex-col md:flex-row justify-center sticky w-full max-w-5xl"
						onSubmit={handleSearch}>
						<input
							type="text"
							placeholder={
								SUPPORTED_LANGUAGES?.find(
									(lang) => lang.identifier === selectedLanguage,
								)?.placeholder || '🔍  Search movies, shows, or ask ChatGPT...'
							}
							value={query}
							onChange={handleSearchChange}
							className=" mb-5 md:mb-0 md:inline-block box-border text-base rounded-sm min-h-[40px] p-[16px_20px] outline-none text-black border-transparent hover:border-[#e50914] border-b-[1px] transition duration-300  w-full"
						/>
						<button
							type="submit"
							disabled={!query.trim()}
							className={`w-[90%] block md:w-fit md:inline-block box-border text-base rounded-sm min-h-[40px] p-[16px_30px] border-none duration-400 font-semibold transition-colors duration-300 ${
								!query.trim()
									? 'bg-[#f16a6f] text-white cursor-not-allowed'
									: 'bg-[#e50914] text-white cursor-pointer hover:bg-[#b20710]'
							}`}>
							{SUPPORTED_LANGUAGES?.find(
								(lang) => lang.identifier === selectedLanguage,
							)?.buttonText || 'Search'}
						</button>
					</form>

					<div className="w-full max-w-5xl mt-6  flex flex-col gap-7">
						{/* Loading State */}
						{loading && (
							<Card>
								<p className="text-center text-gray-600 font-medium flex items-center justify-center">
									<div className="w-6 h-6 border-4 border-t-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
									<span className="ml-2">
										ChatGPT is thinking... Hang tight while we fetch your
										recommendations!
									</span>
								</p>
							</Card>
						)}

						{/* Error State */}
						{!results.length && error && (
							<Card>
								<p className="text-center text-red-600 font-semibold bg-red-100 p-4 rounded-lg mt-4 overflow-hidden">
									{error}
								</p>
							</Card>
						)}

						{/* No Results Found */}
						{!loading && !error && !query.trim() && !results.length && (
							<Card>
								<p className="text-center text-gray-600 font-medium mt-4">
									Please enter a search query to get started.
								</p>
							</Card>
						)}
					</div>

					{results.length > 0 && (
						<h2 className="text-2xl font-semibold text-white mb-4">
							Recommended Movies
						</h2>
					)}

					<ul className="mx-auto  py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{results.map((result) => (
							<MovieCard key={result.id} movie={result} />
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ChatGPTSearch
