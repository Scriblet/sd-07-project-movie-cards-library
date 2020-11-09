import React, { Component } from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map((movie) => <MovieCard movie={movie} key={movie.title} />) }
      </div>
    );
  }
}

MovieList.propType = { movies: PropType.arrayOf(PropType.object).isRequired };

export default MovieList;
