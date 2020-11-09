import React from 'react';
import MovieList from './components/MovieList';
import './App.css';
import movies from './data';

function App() {
  return (
    <div className="App">
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
