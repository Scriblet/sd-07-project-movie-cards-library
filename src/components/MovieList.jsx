// implement MovieList component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;

    return (
      <div>
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />,
        )}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.array };

export default MovieList;
