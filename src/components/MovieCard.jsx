import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const infosMovie = this.props.movie;
    return (
      <div>
        <img src={infosMovie.imagePath} />
        <h4>{infosMovie.title}</h4>
        <h5>{infosMovie.subtitle}</h5>
        <p>{infosMovie.storyline}</p>
        <Rating rating={infosMovie.rating} />
      </div>
    );
  }
}

export default MovieCard;
