import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <div>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
