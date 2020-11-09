// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const moviesList = this.props.movies;
    return (
      <div className='movie-list'>
        {moviesList.map(movies => <MovieCard key={movies.title} movies={movies}/>
        )}
      </div>
    )
  }
}

export default MovieList;