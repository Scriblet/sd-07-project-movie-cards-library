import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card-body">
        <img src={movie.imagePath} alt="imagem" />
        <h2>{movie.title}</h2>
        <h3>{movie.subtitle}</h3>
        <p>{movie.storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
