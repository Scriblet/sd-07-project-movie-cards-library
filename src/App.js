import React from 'react';
import './App.css';
import Header from './components/Header';
import Movielist from './components/MovieList';
import Data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <Movielist movies={Data} />
    </div>
  );
}

export default App;
