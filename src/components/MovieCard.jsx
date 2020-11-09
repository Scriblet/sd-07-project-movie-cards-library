import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={movie.imagePath} alt="imagem" />
        <div className="movie-card-body">
          <h2 className="movie-card-title">{movie.title}</h2>
          <h3 className="movie-card-subtitle">{movie.subtitle}</h3>
          <p className="movie-card-storyline ">{movie.storyline}</p>
        </div>
      </div>
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
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: '',
    subtitle: '',
    storyline: '',
    rating: '',
    imagePath: '',
  },
};

export default MovieCard;
