import React from 'react';
import data from './data.js';
import Header from './components/Header.jsx';
import MovieList from './components/MovieList.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={data} />
    </div>
  );
}

export default App;
