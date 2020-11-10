// implement MovieList component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends Component {
  render() {
    // dentro da prop (que é um obj)vem tudo que vc passou, por isso tem que destruturar a props
    const { movies } = this.props;
    console.log(`Chegada da data no mavelist ${movies}`);
    return (<div className="movie-list">{
      movies.map((eachMovie) => <MovieCard name={eachMovie.title} movie={eachMovie} />)
    }</div>);
  }
}

MovieList.propTypes = { movies: PropTypes.string.isRequired };
// Mas ele não é do tipo object? porque só foi com string?
// tem que estar antes do export, provavelmente o export é a ultima coisa

export default MovieList;
