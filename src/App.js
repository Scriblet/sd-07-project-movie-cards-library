import Header from './components/Header';
import MovieList from './components/MovieList';
import Data from './data';
import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
      <MovieList movies={Data} />
		</div>
	);
}

export default App;
