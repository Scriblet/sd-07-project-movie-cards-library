// implement MovieList component here
import React from 'react';
import MovieCards from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props;
    return (
      <div className="movie-list">
        {movies.movies.map((movie) => {
          return (
            <MovieCards
              movie={movie}
              key={movie.title}
              className="movie-card"
            />
          );
        })}
        ;
      </div>
    );
  }
}

export default MovieList;
