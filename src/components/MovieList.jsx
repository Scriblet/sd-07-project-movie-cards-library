import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        {movies.map((filme) => <MovieCard movie={filme} key={filme.title} />)}
      </div>
    );
  }
}
MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };

export default MovieList;
