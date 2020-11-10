// implement MovieList component here

import React from 'react';
// import data from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      movies.map((movie) => {
        return <MovieCard />
      })
    );
  }
}

export default MovieList;
