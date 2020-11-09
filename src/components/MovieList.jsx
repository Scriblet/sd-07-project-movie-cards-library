// implement MovieList component here
import React from 'react';
import propTypes from 'prop-types';
class MovieList extends React.Component {
  render() {
    return <div className="movie-list"> {this.props.movies} </div>;
  }
}

MovieList.protoType = {movies: propTypes.element};

export default MovieList;
