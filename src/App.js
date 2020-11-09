import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import MovieList from './components/MovieList.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieList />
      </div>
    );
  }
}

export default App;
