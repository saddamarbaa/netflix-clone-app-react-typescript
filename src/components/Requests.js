// TMDB API KEY
// Typically we would stroe in {process.env.API_KEY}
const API_KEY = "92bcc12799d8068995c7c9650f414f3e";

// function to fetch movies from (TMDb)

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,

  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
};

// this is what is happening for each request
// https://api.themoviedb.org/3/trending/all/week?api_key=92bcc12799d8068995c7c9650f414f3e&language=en-US

// https://api.themoviedb.org/3/discover/movie?api_key=92bcc12799d8068995c7c9650f414f3e&with_genres=28

// https://api.themoviedb.org/3/movie/top_rated?api_key=92bcc12799d8068995c7c9650f414f3e&language=en-US

export default request;
