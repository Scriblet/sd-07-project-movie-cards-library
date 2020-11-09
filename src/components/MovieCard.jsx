import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card-body">
        <img src={movie.imagePath} alt="imagem" />
      </div>
    );
  }
}

export default MovieCard;
