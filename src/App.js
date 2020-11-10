import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        {/* The 'movies' props given to the MovieList component gets its
        information from the data imported at the beginning of the file.
        It's used internally in the MovieList component file. */}
        <MovieList movies={data} />
      </div>
    </div>
  );
}

export default App;
