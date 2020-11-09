import React from 'react';
import movies from './../data';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = movies;

    return (
      <h1>{ title } { subtitle } { storyline } { imagePath } { rating }</h1>
    );
  }
}

export default MovieCard;
