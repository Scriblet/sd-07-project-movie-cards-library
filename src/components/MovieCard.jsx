// implement MovieCard component here
import React from 'react';

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div className="movie-card">
      <img src={movie.imagePath} alt="movie"/>
    </div>
  );
}

export default MovieCard;
