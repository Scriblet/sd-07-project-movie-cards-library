import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        {movies.map((movie) => <MovieCard key={movie.title} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.element.isRequired };

export default MovieList;
