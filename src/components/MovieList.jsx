import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  constructor(props) {
    super(props);
  }  

  render() {
    const movies = this.props.movies;

    return (
      <div>
        {movies.map((movie) => <MovieCard movies={movie} />)}
      </div>
    );
  }
}

export default MovieList;
