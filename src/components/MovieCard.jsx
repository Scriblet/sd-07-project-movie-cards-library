import React from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={imagePath} alt={`Imagem do filme ${title}`} />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

export default MovieCard;

export const movieShape = {
  title: propTypes.string,
  subtitle: propTypes.string,
  storyline: propTypes.string,
  imagePath: propTypes.string,
  rating: propTypes.number,
};

MovieCard.propTypes = { movie: propTypes.shape(movieShape) };

MovieCard.defaultProps = { movie: {} };
