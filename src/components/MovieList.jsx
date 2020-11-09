import React, { Component } from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div className="movie-list">
        { this.props.movies.map((movie) => <MovieCard movie={movie} key={movie.title} />) }
      </div>
    );
  }
}

MovieList.propType = { movies: PropType.arrayOf(PropType.object).isRequired };

export default MovieList;
