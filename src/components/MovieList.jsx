import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    return this.props.movies.map((movie) => (
      <MovieCard movie={movie} key={movie.title} />
    ));
  }
}
MovieList.propTypes = { movies: PropTypes.arrayOf({}).isRequired };
export default MovieList;
