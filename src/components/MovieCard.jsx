import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../App.css';

const MovieCard = (props) => {
  const p = props;
  const { title, subtitle, storyline, rating, imagePath } = p.movie;
  return (
    <div className="movie-card">
      <img className="movie-card-image" alt="" src={imagePath} />
      <div className="movie-card-body">
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
      </div>
      <div className="movie-card-rating">
        <Rating key={title} rating={rating} />
      </div>
    </div>
  );
};

MovieCard.PropTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
