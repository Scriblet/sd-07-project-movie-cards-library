import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data.js';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div>
      <Header />
      <MovieList movies={movies}/>
      </div>
    </div>
  );
}

export default App;
