import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div>
        {this.props.movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}
MovieList.defaultProps = { movies: PropTypes.arrayOf(PropTypes.object), };
export default MovieList;
