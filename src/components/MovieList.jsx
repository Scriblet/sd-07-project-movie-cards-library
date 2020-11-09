import React, { Component } from 'react';
import movies from '../data';

class MovieList extends Component {
  render() {
    return (
      <div className="movieList">
        {movies.map(movie => <div key={movie.title}>{movie.title}</div>)}
      </div>
    );
  }
}

export default MovieList;
