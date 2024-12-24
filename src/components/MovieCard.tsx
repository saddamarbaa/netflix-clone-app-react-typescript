import { Link } from 'react-router'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { MovieType } from '../types'
import { BASE_URL } from '../constants'

interface MovieCardProps {
	movie: MovieType
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
	return (
		<Link className="contents" to={`/movie/${movie.id}`}>
			<li
				key={movie.id}
				className="bg-gray-50 rounded-lg shadow-lg flex flex-col  hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out    cursor-pointer">
				<div className="h-[280px] rounded overflow-hidden shadow-lg">
					<LazyLoadImage
						effect="blur"
						placeholderSrc="https://image.tmdb.org/t/p/original/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg"
						src={`${BASE_URL}${movie.poster_path || movie.backdrop_path}`}
						alt={movie.title}
						className="object-cover object-center w-ful"
					/>
				</div>
				<div className="p-4">
					{/* Movie Title */}
					<h3 className="font-semibold text-xl text-gray-900 mb-2">
						{movie.title}
					</h3>

					{/* Release Date */}
					<p className="text-gray-500 text-sm mb-2">
						<strong>Release Date:</strong> {movie.release_date}
					</p>

					{/* Vote Average (Rating) */}
					<p className="text-yellow-400 font-medium mb-4">
						⭐ {movie.vote_average} / 10
					</p>

					{/* Movie Overview */}
					<p className="text-gray-700 text-sm line-clamp-3">{movie.overview}</p>
				</div>
			</li>
		</Link>
	)
}

export default MovieCard
