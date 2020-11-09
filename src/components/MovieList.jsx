// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    return this.props.movies;
  }
}

export default MovieList;

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
