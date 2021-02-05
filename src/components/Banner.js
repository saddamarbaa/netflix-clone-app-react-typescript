import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

// Banner component

const Banner = () => {
  // fetch movies from TMDB saved in movie variable and used for Banner(dynamic)
  //Initialize movie variable with empty array

  const [movie, setMovie] = useState([]);

  // (useEffect) to fetch movies information

  useEffect(() => {
    async function fetchMoviesData() {
      // waits until the request completes..
      // (requests.fetchNetflixOriginals) is coming from Requests.js file

      const request = await axios.get(requests.fetchNetflixOriginals);
      // console.log(request);
      // console.log(request.data);
      // console.log(request.data.results);
      // console.log(request.data.results.length);

      // generate random number from zero to the numbers of the movies that come from API
      //  and save the movie which at that number to movie variable

      const randomMovieNumber = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      // console.log("Random number is ", randomMovieNumber);
      setMovie(request.data.results[randomMovieNumber]);
      return request;
    }

    // function call fetchMoviesData()
    fetchMoviesData();
  }, []);

  // bannerTitle = movie?.title || movie?.name || movie?.original_name
  // optional if the movie doesn't have title use it name as title
  // and if its doesnt have name also then use it original_name as title

  const bannerTitle = movie?.title || movie?.name || movie?.original_name;
  const bannerDescription = movie.overview;

  // console.log(movie);
  // console.log("the banner title is :", bannerTitle);
  // console.log("the banner description is :", bannerDescription);

  /**
   * function to truncate(cut) the string if the length of given string bigger than  given number(n)
   *  @param {string}  given string
   *  @param {n}  given number
			* 
		   if (string.length > n) {
      return string.substr(0, n - 1) + `....`;
    } else {
      return string;
    }
   *
   */

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + " ...." : string;
  };

  return (
    <header
      className="banner"
      // {inline styling}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{bannerTitle}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(bannerDescription, 100)}
        </h1>
      </div>

      {/* this for fade effect in the bottom of the banner */}
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
