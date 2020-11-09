import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return this.props.movies.map((movie) => (
      <MovieCard movie={movie} key={movie.title} />
    ));
  }
}

MovieList.protoTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
export default MovieList;
