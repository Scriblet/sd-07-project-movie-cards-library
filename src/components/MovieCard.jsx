import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const properties = this.props;
    const { title, subtitle, imagePath, storyline, rating } = properties.movie;
    return (
      <div>
        <img src={imagePath} alt="" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}

export default MovieCard;
