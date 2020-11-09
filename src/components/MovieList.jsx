import React from "react";
import MovieCard from './MovieCard.jsx';

export default class MovieList extends React.Component {
  getMovies() {
    return this.props.children.map(movie => <MovieCard>{movie}</MovieCard>)
  }
  render() {
    return <section  className='movie-list'>
      {this.getMovies()}
    </section>
  }
}