import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    console.log(imagePath);
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img src={imagePath} className="movie-card-image" alt={`Movie: ${title}, ${subtitle}`}></img>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
          <Rating />

        </div>
      </div>
    );
  }
}

export default MovieCard;
