import { useState, useEffect, memo } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import YouTube from 'react-youtube'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import movieTrailer from 'movie-trailer'

import 'react-lazy-load-image-component/src/effects/blur.css'

import './Row.css'
import axios from '../utils/api/axios'
import { MovieType } from '../types'
import { BASE_URL } from '../constants'

type RowType = {
	title: string
	fetchUrl: string
	isLargeRow?: boolean
}
const Row = ({ title, fetchUrl, isLargeRow = false }: RowType) => {
	const [movies, setMovies] = useState<MovieType[]>([])
	const [trailerUrl, setTrailerUrl] = useState('')
	const base_url = BASE_URL

	async function fetchMoviesData() {
		try {
			const request = await axios.get(fetchUrl)
			setMovies(request.data.results)
			return request
		} catch (error) {
			console.log(error)
		}
	}

	// call fetchMoviesData()
	useEffect(() => {
		fetchMoviesData()
	}, [fetchUrl])

	//This From react-youtube documentation
	const opts = {
		height: '450',
		width: '95%',

		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	}

	// Handle Youtube Trailer
	// This from movie-trailer documentation
	const handleClick = (movie: MovieType) => {
		if (trailerUrl) {
			setTrailerUrl('')
		} else {
			movieTrailer(movie.name || movie.title || 'Father of the Bride')
				.then((fullUrl: any) => {
					console.log('fullUrl', fullUrl)
					if (fullUrl) {
						const urlParams = new URL(fullUrl).search
						const urlSearchParams = new URLSearchParams(urlParams)
						const movieIdOnYoutube = urlSearchParams.get('v')
						if (movieIdOnYoutube) {
							setTrailerUrl(() => movieIdOnYoutube)
						}
					}
				})
				.catch((error: any) => {
					setTrailerUrl(() => '')
					console.log(error)
				})
		}
	}

	return (
		<div className="row">
			<h2>{title}</h2>
			{/* {iterate over the movie object and return row of image} */}
			<div className="row__posters">
				{movies?.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<div
								className={`row__poster ${isLargeRow && 'row__posterLarge'}`}>
								<div className="row__posters--ImageContainer">
									<LazyLoadImage
										effect="blur"
										placeholderSrc="https://image.tmdb.org/t/p/original/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg"
										onClick={() => handleClick(movie)}
										key={movie.id}
										src={`${base_url}${
											isLargeRow
												? movie.poster_path || console.log('here')
												: movie.backdrop_path
										}`}
										alt={movie.name}
									/>
								</div>
							</div>
						),
				)}
			</div>

			<div onClick={() => setTrailerUrl(() => '')}>
				{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
			</div>
		</div>
	)
}

export default memo(Row)
