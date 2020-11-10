import React from 'react';
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

export default MovieList;
