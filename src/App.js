import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import MovieList from './components/MovieList.jsx';
import moviesList from './data';

const App = () => (
  <div className="App">
    <Header />
    <MovieList movies={moviesList} />
  </div>
);

export default App;
