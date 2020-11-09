import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import DataVideo from './data'; 
import MovieCard from './components/MovieCard'


function App() {
  return (
    <div className='App'>
      <Header title ={<h1 className='page-title'>Movies Card Library</h1>}/>
        <MovieList movies = {DataVideo.map((acc,index) => <MovieCard movies ={acc} key = {index}/>)}/>
    </div>
  );
}

export default App;
