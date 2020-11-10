import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <div className="movie-card-body">
        <img className="movie-card-image" src={imagePath} alt="movie thumbnail" />
        <h4 className="movie-card-title">{title}</h4>
        <span className="movie-card-subtitle">{subtitle}</span>
        <span className="movie-card-storyline">{storyline}</span>
        <span className="rating">{rating}</span>
      </div>);
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
