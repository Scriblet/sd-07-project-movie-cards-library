import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropType from 'prop-types';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    return(
      <div className='movie-list'>
        { movies.map(movie => <MovieCard movie={movie} key={movie.title} />) }
      </div>
    );
  }
}

MovieList.propType = {
  movies: PropType.arrayOf(PropType.object),
}

export default MovieList;
