import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const filme = this.props.movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={filme.imagePath} alt="cartaz do fime" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{filme.title}</h4>
          <h5 className="movie-card-subtitle">{filme.subtitle}</h5>
          <p className="movie-card-storyline">{filme.storyline}</p>
        </div>
        <Rating rating={filme.rating} />
      </div>
    );
  }
}

Rating.prototype = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};


export default MovieCard;
