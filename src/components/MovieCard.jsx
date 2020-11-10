import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Rating from './Rating';


class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <section>
        <img src={imagePath} alt="imagem decorativa do filme" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline} </p>
        <Rating rating={rating} />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
