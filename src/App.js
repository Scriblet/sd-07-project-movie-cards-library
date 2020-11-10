import React from 'react';
import './App.css';
import Header from './components/Header';
import Movielist from './components/MovieList';
import MoviesObject from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <Movielist movie={MoviesObject} />
    </div>
  );
}

export default App;
