/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import axios from '../utils/api/axios'
import { getRandomIntNumberBetween, truncate } from '../utils'
import { MovieType } from '../types'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const API_OPTIONS = {
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${
			import.meta.env.VITE_REACT_APP_TMDB_API_ACCESS_TOKEN
		}`,
	},
}

// Fetch Now Playing Movies
async function fetchNowPlayingMovies(selectedLanguage = 'en-US') {
	try {
		const apiUrl = `/movie/now_playing?language=${selectedLanguage}&page=1` // Use Axios base URL
		const response = await axios.get(apiUrl, API_OPTIONS)
		return response.data.results || []
	} catch (error) {
		console.error('Error fetching now playing movies:', error)
		return []
	}
}

// Fetch Movie Trailer
async function fetchMovieTrailer(movieId: number) {
	try {
		const response = await axios.get(`/movie/${movieId}/videos`, API_OPTIONS)
		const videosList = response.data.results || []

		// Filter trailers
		const trailerVideos = videosList.filter(
			(video: { type: string }) => video.type === 'Trailer',
		)

		return trailerVideos.length > 0 ? trailerVideos[0] : videosList[0]
	} catch (error) {
		console.error('Error fetching trailer:', error)
		return null
	}
}

const Banner = () => {
	const { selectedLanguage } = useSelector((state: RootState) => state.language)
	const [selectedTrailer, setSelectedTrailer] = useState<any>(null)
	const [selectedMovie, setSelectedMovie] = useState<MovieType>()

	// Fetch and Set Movies with Trailers
	async function fetchMoviesWithTrailer() {
		try {
			// Get the list of now-playing movies
			const nowPlayingMovies = await fetchNowPlayingMovies(selectedLanguage)
			if (nowPlayingMovies.length === 0) return

			// Generate a random index to select a random movie
			const randomIndex = getRandomIntNumberBetween(
				0,
				nowPlayingMovies.length - 1,
			)
			const selectedMovie = nowPlayingMovies[randomIndex]

			// Set selected movie
			setSelectedMovie(selectedMovie)

			// Fetch the trailer for the selected movie
			const selectedTrailer = await fetchMovieTrailer(selectedMovie.id)

			const Fallback = {
				iso_639_1: 'en',
				iso_3166_1: 'US',
				name: 'Sidelined: The QB and Me | Official Trailer | A Tubi Original',
				key: 'S0gjQQepXRQ',
				site: 'YouTube',
				size: 1080,
				type: 'Trailer',
				official: true,
				published_at: '2024-10-28T18:00:35.000Z',
				id: '673a2b24d28043e976e3ae63',
			}

			// Check if the trailer has a valid key, otherwise, use the fallback
			if (selectedTrailer && selectedTrailer.key) {
				setSelectedTrailer(selectedTrailer)
			} else {
				setSelectedTrailer(Fallback) // Use the fallback trailer
			}
		} catch (error) {
			console.error('Error fetching movies or trailers:', error)
		}
	}

	useEffect(() => {
		fetchMoviesWithTrailer()
	}, [selectedLanguage])

	// Banner Details
	const bannerTitle =
		selectedMovie?.title ||
		selectedMovie?.name ||
		selectedMovie?.original_name ||
		''
	const bannerDescription = selectedMovie?.overview || ''

	return (
		<header
			className="w-[100vw] h-[70vh] min-h-[400px] overflow-hidden relative text-white -mt-24"
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("https://image.tmdb.org/t/p/original${selectedMovie?.backdrop_path}")`,
				backgroundPosition: 'center center',
			}}>
			{/* Full-screen background video */}
			{selectedTrailer ? (
				<div className="w-screen h-screen absolute top-0 left-0 overflow-hidden transition-transform duration-300 ease-in-out scale-[1.02]">
					<iframe
						className="w-full h-full object-cover transition-transform duration-300 ease-in-out scale-[1.05] aspect-video"
						id="Iframe"
						src={`https://www.youtube.com/embed/${selectedTrailer.key}?autoplay=1&mute=1&loop=1&playlist=${selectedTrailer.key}`}
						title="YouTube video player"
						frameBorder="0"
						allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
			) : (
				<p>Loading trailer...</p>
			)}
			<div className="absolute top-20 ml-8 pt-[140px] h-[190px] z-[2000]">
				<h1 className="mb-1  text-[1.6rem] md:text-[3rem] font-extrabold text-white pb-1">
					{bannerTitle}
				</h1>
				<div className="banner__buttons">
					<button className="cursor-pointer font-bold rounded-[0.2vw] px-8 py-2 mr-4 bg-opacity-80  text-black transform transition-all duration-300 ease-in-out  hover:shadow-lg  shadow-l bg-white hover:scale-105">
						▶️ Play
					</button>

					<button className="cursor-pointer font-bold rounded-[0.2vw] px-8 py-2 mr-4 bg-opacity-80 bg-[#e6e6e6] text-black transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-l hover:bg-white">
						My List
					</button>
				</div>
				<h1 className="text-sm max-w-[360px] h-[80px] pt-4 leading-6 w-[45rem]">
					{bannerDescription && truncate(bannerDescription, 100)}
				</h1>
			</div>
			{/* Fade effect at the bottom of the banner */}
			<div className="h-32 bg-gradient-to-b from-transparent via-transparent to-black/5" />
		</header>
	)
}

export default Banner
