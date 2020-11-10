// implement MovieList component here

import React from 'react';
// import data from '../data';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      movies.map((movie) => <MovieCard movies={movie} />)
    );
  }
}

MovieList.PropTypes = { 
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MovieList;
