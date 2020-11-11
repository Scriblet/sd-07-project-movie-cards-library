// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, imagePath, subtitle, storyline, rating } = this.props.movie;
    return (
      <div>
        <div>
          <img src={imagePath} alt="Capa do filme" />
          <h4>{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
  title: PropTypes.string,
  imagePath: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  ating: PropTypes.number,
 }),
};
