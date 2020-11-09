import React from 'react';
import Rating from './Rating';
import Movies from '../data.js';

class MovieCard extends React.Component {
  render() {
    return Movies.map((movies) => {
      return (
        <div className='movie-card'>
          <h4 className='movie-card-title'>{movies.title}</h4>
          <h5 className='movie-card-subtitle'>{movies.subtitle}</h5>
          <img src={movies.imagePath} className='movie-card-image' />
          <p className='movie-card-storyline'>{movies.storyline}</p>
          <p className='movie-card-rating'>
            <Rating />
          </p>
        </div>
      );
    });
  }
}

export default MovieCard;
