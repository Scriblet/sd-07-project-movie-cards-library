import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imagePath} alt='imagem decorativa do filme' />
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
        <p>{this.props.storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
