import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
      const { title, subtitle, storyline, rating } = this.props;
    return (
      <div>
        <img src={this.props.imagePath} alt='imagem decorativa do filme' />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline} <span> {rating} </span></p>

      </div>
    );
  }
}

export default MovieCard;
