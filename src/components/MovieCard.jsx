import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      movie.map((movies) => {
        const { imagePath, title, subtitle, storyline, rating } = movies;
        return (
          <div key={title.toString()} className="movie-card">
            <img className="movie-card-image" src={imagePath} alt="Imagem" />
            <h4 className="movie-card-title">{title}</h4>
            <h5 className="movie-card-subtitle">{subtitle}</h5>
            <p className="movie-card-storyline">{storyline}</p>
            <span className="movie-card-rating">
              <Rating rating={rating} />
            </span>
          </div>
        );
      })
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.arrayOf(PropTypes.objectOf).isRequired };

export default MovieCard;
