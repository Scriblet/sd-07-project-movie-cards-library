import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img src={movie.imagePath} alt={movie.title} className="movie-card-image" />
          <h4 className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
          <Rating rating={movie.rating} className="movie-card-rating" />
        </div>
      </div>
    );
  }
}
export default MovieCard;
MovieCard.propTypes = {
  movie: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
