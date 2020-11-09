// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.title} />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      imagePath: PropTypes.string,
      rating: PropTypes.number,
    })
  ),
};

export default MovieList;
