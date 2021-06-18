/** @format */

import React, {memo, useEffect, useState } from "react";
import "./Banner.css";
import axios from "../api/axios";
import requests from "../api/requests";
const Banner = () => {
	const [movie, setMovie] = useState([]);

	// function to fetch movies information
	async function fetchMoviesData() {
		try {
			// waits until the request completes..
			// (requests.fetchNetflixOriginals) is coming from Requests.js file
			const request = await axios.get(requests.fetchNetflixOriginals);

			// generate random number from zero to the numbers of the movies that come // from API and save the movie which at that number to movie variable
			const randomMovieNumber = Math.floor(
				Math.random() * request.data.results.length - 1,
			);

			setMovie(request.data.results[randomMovieNumber]);
			return request;
		} catch (error) {
			console.log(error);
		}
	}

	// call fetchMoviesData()
	useEffect(() => {
		fetchMoviesData();
	}, []);

	const bannerTitle = movie?.title || movie?.name || movie?.original_name;
	const bannerDescription = movie?.overview;

	//  function to truncate(cut) the string if the length of given string
	//   bigger than  given number(n)
	const truncate = (string, n) => {
		return string?.length > n ? string.substr(0, n - 1) + " ...." : string;
	};

	return (
		<header
			className='banner'
			// {inline styling}
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
			}}>
			<div className='banner__contents'>
				<h1 className='banner__title'>{bannerTitle}</h1>
				<div className='banner__buttons'>
					<button className='banner__button'>Play</button>
					<button className='banner__button'>My List</button>
				</div>
				<h1 className='banner__description'>
					{truncate(bannerDescription, 100)}
				</h1>
			</div>

			{/* this for fade effect in the bottom of the banner */}
			<div className='banner--fadeBottom' />
		</header>
	);
};

export default memo(Banner);
