import React from 'react';
import './App.css';
import Header from './header';
import MovieList from './MovieList';


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
