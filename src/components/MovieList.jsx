// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard'
import movies from '../data';

class MovieList extends React.Component {
  render() {
    const movieList = movies;
    return (
      movieList.map((key) => (
        <div>
        <MovieCard movie = {key} />
        </div>
      ))
    )
  }
}

export default MovieList;