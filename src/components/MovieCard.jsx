import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={imagePath} alt={title} />
        <div className="movie-card-body">
          <div className="movie-card-title">{title}</div>
          <div className="movie-card-subtitle">{subtitle}</div>
          <div className="movie-card-storyline ">{storyline}</div>
        </div>
        <Rating rating={rating} />
      </div>
    );
  }
}

export default MovieCard;
