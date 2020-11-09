import React from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <Rating rating={rating} />
        <p>{storyline}</p>
        <img src={imagePath} alt={title} />
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: propTypes.shape({
    imagePath: propTypes.string,
    title: propTypes.string,
    rating: propTypes.number,
    subtitle: propTypes.string,
    storyline: propTypes.string,
  }),
};

MovieCard.defaultProps = { movie: {} };
