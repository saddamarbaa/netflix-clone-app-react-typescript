/** @format */

import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../api/axios";



const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	// let create peace of state to keep trake of the movies
	// fetch movies from TMDB saved in movies variable and used for Rows(dynamic)
	// Initialize movies variable with empty array
	const [movies, setMovies] = useState([]);
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

	return (
		<div className='row'>
			<h2>{title}</h2>

			{/* {iterate over the movie object and return row of image} */}

			<div className='row__posters'>
				{movies?.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<img
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
		</div>
	);
};

export default Row;
