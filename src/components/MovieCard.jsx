import React from 'react';
// import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, imagePath, rating} = this.props.movie;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <Rating rating={rating}/>
        <p>{storyline}</p>
        <img src={imagePath}></img>
      </div>
    );
  }
}

export default MovieCard;
