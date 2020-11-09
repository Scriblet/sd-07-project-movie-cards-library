import React from 'react';
import Rating from './components/Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <div className="moviecard">
        <p> Movie</p>
        <span> Teste </span>
        <p> MovieCard aqui</p>
        <Rating />
      </div>
    );
  }
}

export default MovieCard;
