// implement MovieList component here
import React from "react";
import PropTypes from "prop-types";

import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map((movie) => {
          return <MovieCard key={movie.title} movie={movie} />;
        })}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
