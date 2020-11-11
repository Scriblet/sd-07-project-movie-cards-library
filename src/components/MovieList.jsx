import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props.movies
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movieCard={movie} />)}
      </div>
    );
  }
}

export default MovieList;
