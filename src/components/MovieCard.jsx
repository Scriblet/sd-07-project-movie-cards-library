import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" alt={title} src={imagePath}></img>
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Rating className="movie-card-rating" rating={rating} />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
};

MovieCard.defaultProps = {
    title: 'Era pra ter informações aqui',
    subtitle: 'Era pra ter informações aqui',
    storyline: 'Era pra ter informações aqui',
    rating: 'Tinha um número aqui',
    imagePath: 'Era pra ter informações aqui',
};

export default MovieCard;
