import React, { Component } from 'react';
import movies from '../data';

class MovieList extends Component {
  render() {
    return (
      <div>
        {movies.map((movie) => <div>{movie.title}</div>)}
      </div>
    );
  }
}

export default MovieList;
