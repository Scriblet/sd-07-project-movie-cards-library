import React from 'react';
import Rating from './Rating';
import Movies from '../data.js';

class MovieCard extends React.Component {
  render() {
    return Movies.map((movies, index) => (
      <div className="movie-card">
        <img className="movie-card-image" src={movies.imagePath} alt="Imagem" />
        <h4 className="movie-card-title">{movies.title}</h4>
        <h5 className="movie-card-subtitle">{movies.subtitle}</h5>
        <p className="movie-card-storyline">{movies.storyline}</p>
        <p className="movie-card-rating">
          <Rating rating={movies.rating} index={index} />
        </p>
      </div>
    ));
  }
}

export default MovieCard;
