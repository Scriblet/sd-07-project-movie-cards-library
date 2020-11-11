import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Rating from './Rating';


class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <img src={movie.imagePath} alt={movie.title} />
        <div>
          <h4>{movie.title}</h4>
          <h5>{movie.subtitle}</h5>
          <p>{movie.storyline}</p>
          <Rating rating={movie.rating} />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.string.isRequired };

export default MovieCard;
