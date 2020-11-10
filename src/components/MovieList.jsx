import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    return (
    <div>
      {(movies.map(item => <MovieCard key={item.title} movie={item} />))}
    </div>);
  }
}
export default MovieList;
