import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    console.log(imagePath);
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img src={imagePath} className="movie-card-image" alt={`Movie: ${title}, ${subtitle}`}></img>
        </div>
      </div>
    );
  }
}

export default MovieCard;
