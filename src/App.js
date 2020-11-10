import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

function App() {
  return (
    // reclama que body não pode ser uma child de uma div ... onde esta essa div?
    // R: No ../pubic/index.html ele renderiza tudo que está nesse roots
    <div className="App">
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}
export default App;
