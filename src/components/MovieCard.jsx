import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie;
    return (
      <div className="movie-card-body">
        <img className="movie-card-image" src={imagePath} alt="movie thumbnail" />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  })),
};

MovieCard.defaultProps = { movie: [] };

export default MovieCard;
