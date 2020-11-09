import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div className="movieList">
        {movies.map((movie) => <MovieCard key={movie.title} movieCard={movie} />)}
      </div>
    );
  }
}

export default MovieList;
