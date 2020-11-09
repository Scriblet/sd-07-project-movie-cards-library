import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="movie-list">
        {movies.map(movie => <MovieList  movies={movie} />)}
      </div>
    </div>
  );
}

export default App;

// {pokemons.map(pokemon => <Pokedex pokemons={pokemon} />)}