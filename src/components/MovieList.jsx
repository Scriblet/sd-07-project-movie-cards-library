import React, { Component } from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    return (
      <main>
        <div> {
        movies.map((item) => <MovieCard key={item.title} movie={item} />) } </div>
      </main>
    );
  }
}

MovieList.propTypes = { movies: propTypes.arrayOf(propTypes.object).isRequired };

export default MovieList;
