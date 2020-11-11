import React from 'react';
// import PropTypes from 'prop-types';
import Rating from './Rating.jsx';

class MovieCard extends React.Component {
  render() {
    const prop = this.props;
    return (
      <div className="movie-card">
        <img src={prop.movie.imagePath} className="movie-card-image" alt={prop.movie.title} />
        <div className="movie-card-budy">
          <h4 className="movie-card-title">{prop.movie.title}</h4>
          <h5 className="movie-card-subtitle">{prop.movie.subtitle}</h5>
          <p className="movie-card-storyline">{prop.movie.storyline}</p>
        </div>
        <div className="movie-card-rating"><Rating rating={prop.movie.rating} className="rating"/></div>
      </div>
    );
  }
}

/*MovieCard.propTypes = {
  movie: {
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }
}; */

export default MovieCard;
