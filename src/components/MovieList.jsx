// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        {movies.map((filme) => <MovieCard movie={filme} key={filme.title} />)}
      </div>
    );
  }
  MovieList.propTypes = {
    movies: propTypes.array,
}

export default MovieList;
