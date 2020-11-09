import React, { Component } from 'react';
import Rating from './Rating';
import PropType from 'prop-types'

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div className='movie-card'>
        <img src={imagePath} alt={title}/>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard.propType = {
  title: PropType.string,
  subtitle: PropType.string,
  storyline: PropType.string,
  rating: PropType.number,
  imagePath: PropType.string,
}

export default MovieCard;
