import { memo, useEffect, useState } from 'react'

import './Banner.css'
import axios from '../utils/api/axios'
import requests from '../utils/api/requests'
import { getRandomIntNumberBetween, truncate } from '../utils'
import { MovieType } from '../types'

const Banner = () => {
	const [movie, setMovie] = useState<MovieType>()

	async function fetchMoviesData() {
		try {
			const request = await axios.get(requests.fetchNetflixOriginals)
			const randomMovieNumber = getRandomIntNumberBetween()
			setMovie(request.data.results[randomMovieNumber])
			return request
		} catch (error) {
			console.log(error)
		}
	}

	// call fetchMoviesData()
	useEffect(() => {
		fetchMoviesData()
	}, [])

	const bannerTitle = movie?.title || movie?.name || movie?.original_name
	const bannerDescription = movie?.overview

	return (
		<header
			className="banner"
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
				backgroundPosition: 'center center',
			}}>
			<div className="banner__contents">
				<h1 className="banner__title">{bannerTitle}</h1>
				<div className="banner__buttons">
					<button className="banner__button play">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{bannerDescription && truncate(bannerDescription, 100)}
				</h1>
			</div>

			{/* this for fade effect in the bottom of the banner */}
			<div className="h-32 bg-gradient-to-b from-transparent via-transparent to-black/5" />
		</header>
	)
}

export default memo(Banner)
