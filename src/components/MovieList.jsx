// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    // dentro da prop (que é um obj)vem tudo que vc passou, por isso tem que destruturar a props
    const movies = this.props.movies;
    // console.log(`Chegada da data no mavelist ${movies}`);
    return (<div className="movies">{
      movies.map((eachMovie) => <MovieCard movie={eachMovie} />)
    }</div>);
  }
}

export default MovieList;
