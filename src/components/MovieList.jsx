import React from 'react';
import MovieCard from './MovieCard';

class Pokedex extends React.Component {
  render() {
    const movieList = this.props.movies;
    return (
      <div className='movie-list'>
        {movieList.map((movie) => {
          return <MovieCard key={movie.title} movies={movie} />;
        })}
      </div>
    );
  }
}

export default Pokedex;
