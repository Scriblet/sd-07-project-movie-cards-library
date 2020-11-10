// implement MovieList component here

import React from 'react';
import PropTypes from 'prop-types';
// import data from '../data';
// import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return this.props.movies;
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
