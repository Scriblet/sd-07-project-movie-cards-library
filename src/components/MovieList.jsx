// implement MovieList compone
import React from 'react';
import PropTypes from 'prop-types';
import test from './propType';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    test,
  ).isRequired,
};

export default MovieList;
