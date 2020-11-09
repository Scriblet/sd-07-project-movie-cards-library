import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const filmes = this.props.movies;
    return (
      <div>
        {filmes.map((movie) => <MovieCard key={movie.title} />)}
      </div>
    );
  }
}

export default MovieList;
