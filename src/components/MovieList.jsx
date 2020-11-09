import React, { Component } from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends Component {
  render() {
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
