import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../App.css';

const MovieList = (props) => {
  const p = props;
  const movies = p.movies;
  return (
    <div className="movie-list">
      {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
    </div>
  );
};

MovieList.PropTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieList;
