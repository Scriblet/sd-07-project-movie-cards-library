import React from 'react';
import PropTypes, { object } from 'prop-types';
import MovieCard from './MovieCard';

const MovieList = (props) => {
  const { movies } = props;
  return (
    <div>
      {movies.map((movie) => <MovieCard key={movie.title} data={movie} />)}
    </div>
  );
};

MovieList.propTypes = { movies: PropTypes.arrayOf(object).isRequired };

export default MovieList;
