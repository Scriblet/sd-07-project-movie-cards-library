import React from 'react';
// import data from './data';
import Header from './components/Header';
// import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
// import Rating from './components/Rating';
import './App.css';
import data from './data'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList data={data} />
      </div>
    );
  }
}
export default App;
