import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import requests from "./Requests";

// Row component

const Row = ({ title, fetchUrl, isLageRow = false }) => {
  // let create peace of state to keep trake of the movies
  // fetch movies from TMDB saved in movies variable and used for Rows(dynamic)
  //Initialize movies variable with empty array

  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  // (useEffect) to fetch movies information

  useEffect(() => {
    async function fetchMoviesData() {
      // waits until the request completes..
      // (axios.get(fetchUrl)) is coming from Requests.js file

      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      // console.log(request);
      // console.log(request.data);
      // console.log(request.data.results);
      // console.log(request.data.results.length);

      return request;
    }

    // function call fetchMoviesData()
    fetchMoviesData();
  }, [fetchUrl]);

  // complete rows of movies
  console.log(" rows of movies are ", movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      {/* {iterate over the movie object and return row of image} */}

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLageRow && movie.poster_path) ||
              (!isLageRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLageRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLageRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
