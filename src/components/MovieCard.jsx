import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
      const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <section>
        <img src={imagePath} alt='imagem decorativa do filme' />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline} <span> {rating} </span></p>
      </section>
    );
  }
}

export default MovieCard;
