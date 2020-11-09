// implement MovieCard component here
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;

    return (
      <div className='movie-card' key={title}>
          <img  className='movie-card-image' src={imagePath} alt={title}/>
        <div className="movie-card-body">
          <h4 className='movie-card-title'>{title}</h4>
          <h5 className='movie-card-subtitle'>{subtitle}</h5>
          <p className='movie-card-storyline'>{storyline}</p>
        </div>
      </div>
    );
  };
};

export default MovieCard;