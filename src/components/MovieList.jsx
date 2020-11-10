import React from "react";
import MovieCard from './MovieCard.jsx';

export default class MovieList extends React.Component {
  render() {
    return <section  className="movie-list">
      { this.props.prop.map(movie => <MovieCard prop={ movie }/>) }
    </section>
  }
}