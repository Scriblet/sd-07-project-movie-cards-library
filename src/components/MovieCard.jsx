import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCards extends React.Component {
  render() {
    const movie = this.props.movie;
    const { title, subtitle, storyline, imagePath } = this.props.movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={imagePath} alt={`${title} sprite`} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Rating className="movie-card-rating" rating={movie.rating} />
        </div>
      </div>
    );
  }
}

MovieCards.defaultProps = {
  movie: {
    title: 'string',
    imagePath: 'string',
    subtitle: 'string',
    storyline: 'string',
  },
};

MovieCards.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
  }),
};

export default MovieCards;
