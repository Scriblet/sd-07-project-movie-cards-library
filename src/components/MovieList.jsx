import React from 'react';
import PropTypes, { object } from 'prop-types';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return <div>{movies[0].title}</div>;
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(object).isRequired };
export default MovieList;
