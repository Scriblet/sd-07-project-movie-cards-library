import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="MovieCard">
        <div>
        <img src={imagePath} alt="imagem do filme" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
      </div>

        <Rating rating={rating} />
      </div>
    );
  }
}
export default MovieCard;
