import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
        <div className='movie-card'>
        <img className='movie-card-body' src={movie.imagePath} alt={movie.title} />
        <h4 className='movie-card-title'>{movie.title}</h4>
        <h5 className='movie-card-subtitle'>{movie.subtitle}</h5>
        <p className='movie-card-storyline'>{movie.storyline}</p>
        <Rating className='movie-card-rating' rating={movie.rating} />
      </div>
    );
  }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
      imagePath: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
    }).isRequired,
  };

export default MovieCard;
