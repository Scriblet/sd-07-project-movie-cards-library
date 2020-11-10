import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';
// import Header from './Header';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">{
          movies.map((movie) => (
            <MovieCard
              key={movie.title} title={movie.title}
              subtitle={movie.subtitle} storyline={movie.storyline}
              imagePath={movie.imagePath} rating={movie.rating}
            />
          ))
    } </div>
    );
  }
}

export default MovieList;