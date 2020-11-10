import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  const list = props.movies;
  return (
    <div>
      {list.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
    </div>
  );
}


MovieList.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }),
};

MovieList.defaultProps = { movies: { notes: 'No movies Information' } };
