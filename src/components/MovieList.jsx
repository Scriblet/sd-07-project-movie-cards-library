import React, { Component } from "react";
import MovieCard from "./MovieCard";
class MovieList extends Component {
  render() {
    return (
      <div>
        {this.props.movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}
export default MovieList;
