import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';


class MovieCard extends Component {
  render() {
    const { title, subtitle, imagePath, storyLine, rating } = this.props.movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={imagePath} alt={`${title} ${subtitle}`} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyLine">{storyLine}</p>
          <Rating className="movie-card-rating" Rating={rating} />
        </div>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyLine: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
