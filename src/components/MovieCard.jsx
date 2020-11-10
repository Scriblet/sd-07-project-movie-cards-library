
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
class MovieCard extends React.Component {
    render() {
        const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img src={imagePath} alt={imagePath} />
        <Rating rating={rating} />
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,

}

export default MovieCard;