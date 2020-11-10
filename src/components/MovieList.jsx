import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';
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
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
export default MovieList;
