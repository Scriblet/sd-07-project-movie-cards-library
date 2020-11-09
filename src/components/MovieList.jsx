import React, { Component } from 'react';
import MovieCard from './MovieCard';


class MovieList extends Component {
  render() {
    return (
      <main>
        <div>
            {this.props.movies.map((movie) => <MovieCard title={movie.title} subtitle={movie.subtitle} storyline={movie.storyline} rating={movie.rating} imagePath={movie.imagePath }/>)}
        </div>
      </main>
    );
  }
}

export default MovieList;
