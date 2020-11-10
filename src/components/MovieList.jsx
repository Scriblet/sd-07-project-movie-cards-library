import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const properties = this.props;
    return (properties.movies.map((movie) => (
      <MovieCard key={movie.title} movie={movie} />
    )));
  }
}

export default MovieList;
