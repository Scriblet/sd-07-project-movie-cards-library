import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;

    return (
      movies.map((movie) => <MovieCard className='movie-list' key={movie.title} movie={movie} />)
    );
  }
}

MovieList.defaultProps = { movies: [] };

export default MovieList;
