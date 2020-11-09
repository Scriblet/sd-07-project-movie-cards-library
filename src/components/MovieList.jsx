import React, { Component } from 'react';
import MovieCard from './MovieCard';


class MovieList extends Component {
  render() {
    return(
      <div className='movie-list'>
        { this.props.movies.map(movie => <MovieCard movie={movie} key={movie.title} />) }
      </div>
    )
  }
}

export default MovieList;