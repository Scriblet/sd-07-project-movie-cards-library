import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;

    return movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
  }
}

MovieList.propTypes = { movies: PropTypes.array.isRequired, };

export default MovieList;
