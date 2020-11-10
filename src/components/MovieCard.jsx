// implement MovieList component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {

  render() {

    const movie = this.props.movie

    return (

      <div>
      
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={movie.rating} />
        <img src={movie.imagePath} />

      </div>      

    )
  }
}

export default MovieCard 