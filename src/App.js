import React from 'react';
import './App.css';
import { Header } from './components/Header.jsx';
import { MovieCard } from './components/MovieCard.jsx';
import { MovieList } from './components/MovieList.jsx';
import { Rating } from './components/Rating.jsx';

function App() {
  return (
    <div className="App">
      <Header>Movie Cards Library</Header>
      <MovieCard>MovieCard funciona</MovieCard>
      <MovieList>MovieList funciona</MovieList>
      <Rating>Rating funciona</Rating>
    </div>
  );
}

export default App;
