import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data.js';

function App() {
  const moviesArray = movies;
  return (
    <div className="App">
      <MovieList movies={moviesArray} />;
    </div>
  );
}

export default App;
