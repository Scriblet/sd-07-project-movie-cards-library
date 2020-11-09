import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return(
      <>
        <img src={movie.imagePath} />
      </>
    )
  }
}

export default MovieCard;
