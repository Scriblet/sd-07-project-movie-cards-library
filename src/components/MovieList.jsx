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
      movies.map((eachMovie) => <MovieCard key={eachMovie.title} movie={eachMovie} />)
      // Porque aqui tinha que ser "key", não podia ser name?
    }</div>);
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
// Mas ele não é do tipo object? R: Sim
// porque só foi com string? R: Porque não é só escrever "array"
// tem que estar antes do export, provavelmente o export é a ultima coisa

export default MovieList;
