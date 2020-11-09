import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const dataMovies = this.props.movies;
    return (
      <div className="movie-list">
        {dataMovies.map((eachMovie) => (
          <MovieCard movie={eachMovie} key={eachMovie.title} />
        ))}
      </div>
    );
  }
}

export default MovieList;
