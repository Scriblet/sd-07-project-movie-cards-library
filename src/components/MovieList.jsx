// implement MovieList component here
import MovieCards from './MovieCard';
import React from 'react';

class MovieList extends React.Component {
	render() {
    const movies = this.props.movies;
		return (
			<div className='movie-list' >
				{movies.map(movie => 
					<MovieCards movies={movie} key={movie.title} className='movie-card' />
				)}
			</div>
		);
	}
}

export default MovieList;
