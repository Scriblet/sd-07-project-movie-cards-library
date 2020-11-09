import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    console.log(this.props.movie)
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    
    return (
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>{rating}</p>
        <img src="{imagePath}"></img>
      </div>
    );
  }
}

export default MovieCard;
