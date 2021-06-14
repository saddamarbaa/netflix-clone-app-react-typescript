/** @format */

import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../api/axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	// let create peace of state to keep trake of the movies
	// fetch movies from TMDB saved in movies variable and used for Rows(dynamic)
	// Initialize movies variable with empty array
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");
	const base_url = "https://image.tmdb.org/t/p/original";

	// function  to fetch movies information
	async function fetchMoviesData() {
		try {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		} catch (error) {
			console.log(error);
		}
	}

	// call fetchMoviesData()
	useEffect(() => {
		fetchMoviesData();
	}, [fetchUrl]);

	//This  From react-youtube documentation
	const opts = {
		height: "390",
		width: "100%",

		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	// Handle Youtube Trailer
	// This from movie-trailer documentation
	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie.name || "")
				.then((fullUrl) => {
					if (fullUrl) {
						const urlParams = new URL(fullUrl).search;
						const urlSearchParams = new URLSearchParams(urlParams);
						const movieIdOnYoutube = urlSearchParams.get("v");
						setTrailerUrl(movieIdOnYoutube);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		<div className='row'>
			<h2>{title}</h2>
			{/* {iterate over the movie object and return row of image} */}
			<div className='row__posters'>
				{movies?.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<LazyLoadImage
								effect='blur'
								placeholderSrc='https://image.tmdb.org/t/p/original/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg'
								onClick={() => handleClick(movie)}
								className={`row__poster ${
									isLargeRow && "row__posterLarge"
								}`}
								key={movie.id}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
							/>
						),
				)}
			</div>

			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	);
};

export default Row;
