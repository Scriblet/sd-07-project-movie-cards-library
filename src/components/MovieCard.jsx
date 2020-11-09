import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';

class MovieCard extends Component {
  render() {
    const {
      imagePath,
      title,
      subtitle,
      storyline,
      rating,
    } = this.props.movieCard;
    return (
      <div className="movieCard">
        <img src={imagePath} alt={title} />
        <div>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>{storyline}</p>
        </div>
        <div>Rating: {rating}</div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movieCard: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
