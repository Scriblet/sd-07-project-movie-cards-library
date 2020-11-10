import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
// import MovieCard from './components/MovieCard';
// import Rating from './components/Rating';
import movies from './data';
import './App.css';


function App() {
  return (
    <div className="App">
      {<Header />}
      {<MovieList movies={movies} /> }
      🚀Trybe
    </div>
  );
}

export default App;
