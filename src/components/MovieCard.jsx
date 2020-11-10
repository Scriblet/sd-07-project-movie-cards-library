import React from 'react';
import Rating from './Rating.jsx';

class MovieCard extends React.Component {
  render() {
    const prop = this.props;
    return (
      <div className="movie-card">
        <img src={prop.imagePath} className="movie-card-image" alt={prop.title} />
        <div className="movie-card-budy">
          <h4 className="movie-card-title">{prop.title}</h4>
          <h5 className="movie-card-subtitle">{prop.subtitle}</h5>
          <p className="movie-card-storyline">{prop.storyline}</p>
        </div>
        <div className="movie-card-rating"><Rating rating={prop.rating} /></div>
      </div>
    );
  }
}

export default MovieCard;
