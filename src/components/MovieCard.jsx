import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline } = movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={imagePath} alt="imagem" />
        <div className="movie-card-body">
          <h2 className="movie-card-title">{title}</h2>
          <h3 className="movie-card-subtitle">{subtitle}</h3>
          <p className="movie-card-storyline ">{storyline}</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    title: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: '',
    subtitle: '',
    storyline: '',
    rating: 0,
    imagePath: '',
  },
};

export default MovieCard;
