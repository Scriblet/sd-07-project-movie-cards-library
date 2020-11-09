import React from 'react';
import Rating from './Rating.jsx';

export default class MovieCard extends React.Component {
  getMovieElement() {
    const {title, imagePath, subtitle, storyline, rating} = this.props.children;
    return (
    <div className='movie-card'>
      <div key={title} className='movie-card-budy'>
        <img src={imagePath} className='movie-card-image'/>
        <h4 className='movie-card-title'>{title}</h4>
        <h5 className='movie-card-subtitle'>{subtitle}</h5>
        <p className='movie-card-storyline'>{storyline}</p>
      </div>
      <Rating rating={rating} className='rating'/>
    </div>
    )
  }
  render() {
    return this.getMovieElement()
  }
};
