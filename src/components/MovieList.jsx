// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    return (
      movies.map((movie) => <MovieCard key={movie.title} movies={movie} />)
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string })).isRequired,
};

MovieList.defaultProps = {};

export default MovieList;
