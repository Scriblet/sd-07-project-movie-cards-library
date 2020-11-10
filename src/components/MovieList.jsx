import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie-card">
            <MovieCard key={movie.title} movie={movie} />
          </div>
        ))};
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.oneOfType([PropTypes.object]) };

MovieList.defaultProps = { movies: [] };

export default MovieList;
