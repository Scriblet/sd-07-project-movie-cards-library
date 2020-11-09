import React from 'react';
import PropTyoes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <section className="movie-card">
        <img className="movie-card-image" src={movie.imagePath} alt={movies.title} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{movies.title}</h4>
          <h5 className="movie-card-subtitle">{movies.subtitle}</h5>
          <p className="movie-card-storyline"> {movies.storyline} </p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={movies.rating} />
        </div>
      </section>
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
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: 'NO MOVIE TITLE',
    subtitle: 'NO MOVIE SUBTITLE',
    storyline: 'NO MOVIE SINOPSE',
    imagePath: 'NO IMAGE',
    rating: 0.0,
  },
};

export default MovieCard;
