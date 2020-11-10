import React from "react";
import MovieCard from './MovieCard.jsx';

export default class MovieList extends React.Component {
  getMovies() {
    return this.props.prop.map(movie => <MovieCard prop={movie}/>)
  }
  render() {
    return <section  className='movie-list'>
      { this.getMovies() }
    </section>
  }
}