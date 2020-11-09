// implement MovieList component here
import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      movies.map((movie) => (
        <MovieCard movie={movie} key={movie.title} />
      ))
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf().isRequired };

export default MovieList;
