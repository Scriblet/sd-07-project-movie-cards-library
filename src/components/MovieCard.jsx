// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const properities = this.props;
    const { title, subtitle, storyline, imagePath, rating } = properities.movie;
    return (
      <div className="movie-card-body">
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <Rating rating={rating} className=".movie-card-rating" />
        <img src={imagePath} alt={title} className="movie-card-image" />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  })
};

MovieCard.defaultProps = {
  movie: {},
  title: 'Título',
  subtitle: 'Subtítulo',
  storyline: 'Resumo',
  imagePath: 'URL Imagem',
  rating: 'Raking',
};

export default MovieCard;
