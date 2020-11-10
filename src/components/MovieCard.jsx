import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


export default function MovieCard({ movie }) {
  return (
    <div>
      <img src={movie.imagePath} alt={movie.title} />
      <h4>{movie.title}</h4>
      <h5>{movie.subtitle}</h5>
      <p>{movie.storyline}</p>
      <Rating rating={movie.rating} />
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

MovieCard.defaultProps = { movie: { notes: 'No movies Information' } };
