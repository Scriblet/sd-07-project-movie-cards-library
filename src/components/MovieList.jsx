import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const films = this.props.movies;
    return (
      <div>
        {films.map((movie) => <MovieCard key={movie.title} />)}
      </div>
    );
  }
}

export default MovieList;
