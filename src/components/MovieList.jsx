// implement MovieList component here
import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      movies.map((movie) => <MovieCard movie={movie} key={movie.title}  />)
    );
  }
}

export default MovieList;
