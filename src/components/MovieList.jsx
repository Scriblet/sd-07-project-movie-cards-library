import React from "react";
import MovieCard from './MovieCard.jsx';

export default class MovieList extends React.Component {
  getMovies = () => this.props.children.map(movie => <MovieCard>{movie}</MovieCard>)
  render = () => <section  className='movie-list'>
    {this.getMovies()}
  </section>
};