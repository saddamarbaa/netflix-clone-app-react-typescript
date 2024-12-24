import { useEffect, useState } from 'react'
import axios from '../utils/api/axios'
import { useParams } from 'react-router'

import NAV from '../components/NAV'
import { API_OPTIONS, BASE_URL, FALLBACK_IMAGE_URL } from '../constants'

const MovieDetailScreen = () => {
	const { id } = useParams<{ id: string }>()
	const [movie, setMovie] = useState<any>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string>('')
	const [trailer, setSelectedTrailer] = useState<any>(null)

	// Fetch and Set Movies with Trailers
	async function fetchMoviesWithTrailer(movieId: string) {
		try {
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

			const response = await axios.get(`/movie/${movieId}/videos`, API_OPTIONS)
			const videosList = response.data.results || []

			// Filter trailers
			const trailerVideos = videosList.filter(
				(video: { type: string }) => video.type === 'Trailer',
			)

			const selectedTrailer =
				trailerVideos.length > 0 ? trailerVideos[0] : videosList[0]

			// Check if the trailer has a valid key, otherwise, use the fallback
			if (selectedTrailer && selectedTrailer.key) {
				setSelectedTrailer(selectedTrailer)
			} else {
				setSelectedTrailer(Fallback)
			}
		} catch (error) {
			console.error('Error fetching movies or trailers:', error)
		}
	}

	const fetchMovieDetails = async (id: string) => {
		try {
			const tmdbApiKey = import.meta.env.VITE_REACT_APP_TMDB_API_KEY
			if (!tmdbApiKey) {
				setError('API key is missing.')
				return
			}

			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbApiKey}&language=en-US`,
			)
			setMovie(response.data)
		} catch (err) {
			setError('Failed to fetch movie details.')
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		if (id) {
			fetchMovieDetails(id)
			fetchMoviesWithTrailer(id)
		}
	}, [id])

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>{error}</div>
	}

	return (
		<div className="text-gray-100">
			<NAV isShowLanguage={false} />
			<div className="mx-auto flex w-full max-w-6xl flex-col space-y-8 mt-[5%]">
				<div className="flex flex-col md:flex-row md:space-x-8 items-center md:items-start p-6 bg-opacity-80 rounded-lg shadow-xl">
					<img
						src={
							`${BASE_URL}${movie?.backdrop_path || movie?.poster_path}` ||
							FALLBACK_IMAGE_URL
						}
						className="rounded-lg shadow-lg border-4 border-gray-700 h-full w-full max-w-xl object-cover min-h-[25rem] cursor-pointer max-h-[450px]"
						alt="Movie poster"
					/>

					<div className="flex flex-col space-y-4 p-6 text-white bg-gray-900 bg-opacity-70 rounded-lg shadow-lg w-full md:w-3/4">
						<h2 className="text-3xl font-extrabold">
							{movie.title || movie.name}
						</h2>

						<div className="space-y-3">
							<p className="text-lg">
								<span className="font-bold">Overview:</span> {movie.overview}
							</p>

							<p className="text-lg">
								<span className="font-bold">Status:</span>{' '}
								{movie?.status || 'N/A'}
							</p>

							<p className="text-lg">
								<span className="font-bold">Date Released:</span>{' '}
								{movie?.release_date || movie?.first_air_date || 'N/A'}
							</p>

							<p className="text-lg">
								<span className="font-bold">Popularity:</span>{' '}
								{movie?.popularity || 'N/A'}
							</p>

							<p className="text-lg">
								<span className="font-bold">Rating:</span>{' '}
								{movie?.vote_count || 'N/A'}
							</p>

							{movie?.production_companies?.length && (
								<p className="text-lg">
									<span className="font-bold">Production Company:</span>
									{movie?.production_companies[0]?.name || 'N/A'}
								</p>
							)}
						</div>
					</div>
				</div>

				<div className="relative p-4 mb-16 w-full h-full">
					<div
						className="relative w-full rounded-lg overflow-hidden shadow-lg"
						style={{ paddingBottom: '56.25%' }}>
						{trailer && (
							<div className="absolute top-0 left-0 w-full h-full">
								<iframe
									className="w-full h-full rounded-lg object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
									id="Iframe"
									src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&playlist=${trailer.key}`}
									title="YouTube video player"
									frameBorder="0"
									allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen></iframe>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieDetailScreen
