import axios from 'axios'

// Initializing axios with default TMDB URL
const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
})

export default instance
