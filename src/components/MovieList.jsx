import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends Component {
  render() {
    const movies = this.props.movies;

    return (
      <div>
        {movies.map((movie) => <MovieCard movies={movie} key={movie.title} />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })).isRequired,
};

export default MovieList;
