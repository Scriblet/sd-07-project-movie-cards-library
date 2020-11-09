// implement MovieList component here
// Este componente representará toda a área com os cartões de filmes. 
// MovieList deve receber uma prop movies, que é um array de objetos com informações de um filme.
import React from 'react';
import MovieCard from './MovieCard';


const MovieList = (props) => {
  const { movies } = props;
  return (
    <div className="movie-list">
      {movies.map(movie => <MovieCard key={movie.title} data={movie} />)}
    </div>
  );
};

export default MovieList;
