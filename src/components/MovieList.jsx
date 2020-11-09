import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return this.props.movies.map((movie) => (
      <MovieCard key={movie.title} movie={movie} />
    ));
  }
}

MovieList.protoTypes = { movie: PropTypes.arrayOf(PropTypes.object).isRequired };
export default MovieList;
