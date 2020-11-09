import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="header">
        <h1> MovieList </h1>
        <MovieCard />
      </div>
    );
  }
}

export default MovieList;
