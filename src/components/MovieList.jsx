// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const listMovies = this.props.movies;
    return (
      <div>
        {listMovies.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
      </div>
    );
  }
}
export default MovieList;
