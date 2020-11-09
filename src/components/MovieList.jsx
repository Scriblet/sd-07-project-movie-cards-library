import React from 'react';
import PropTypes from 'prop-types';
import MovieCad from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div className="movie-list">
        {movies.map((movie, index, moviesList) =>
          <MovieCad key={moviesList[index].title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.objectOf).isRequired };
