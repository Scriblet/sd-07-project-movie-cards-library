// implement MovieCard component here
import React from 'react';
import Rating from './Rating'

class MovieCard extends React.Component {
    render() {
        const {imagePath, title, subtitle, storyline,rating} = this.props.movies
      return <div className='movie-card' key = {this.props.index}>
          <img className = 'movie-card-image' src={imagePath} alt ={this.props.alt}/>
          <div className ='movie-card-body'>
            <h3 className ='movie-card-title'>{title}</h3>
            <h4 className ='movie-card-subtitle'>{subtitle}</h4>
            <p className = 'movie-card-storyline'>{storyline}</p>
          </div>
          <div className =''>
            <Rating rating = {rating}/>
          </div>
      </div>
    }
}

export default MovieCard;