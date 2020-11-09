// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, subtitle, storyline, rating } = this.props.movies;
    return (
      <div className="movie-card">
        <img
          className="movie-card-image"
          src={imagePath}
          alt={title}
        />
        <div className="movie-card-body">
          <h3 className="movie-card-title">{title}</h3>
          <h4 className="movie-card-subtitle">{subtitle}</h4>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
      imagePath: propTypes.string,
      title: propTypes.string,
      subtitle: propTypes.string,
      storyline: propTypes.string,
      rating: propTypes.string,
}

export default MovieCard;
