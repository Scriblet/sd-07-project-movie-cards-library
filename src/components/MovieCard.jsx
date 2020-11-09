// implement MovieCard component here
import React from 'react';
import Rating from './Rating.jsx'

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props.key;
    return (
        <div>
            <img src={movie.imagePath} alt=""></img>
            <h4>{movie.title}</h4>
            <h5>{movie.subtitle}</h5>
            <p>{movie.storyline}</p> 
            <Rating rating={movie.rating}/>
        </div>

    )
  }
}

export default MovieCard;
