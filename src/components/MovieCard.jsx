// implement MovieCard component here
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title } = movie;

    return (
      <div className='movie-card' key={title}>
        <span>Olá</span>
      </div>
    );
  };
};

export default MovieCard;