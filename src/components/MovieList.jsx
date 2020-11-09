import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';
import { movieShape } from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie, index) => <MovieCard movie={movie} key={movies[index].title} />)}
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape(movieShape),
  ),
};

MovieList.defaultProps = [];
