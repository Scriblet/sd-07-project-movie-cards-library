import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

//Passe uma key para cada MovieCard renderizado
class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        {movies.map((movie) => <MovieCard  key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
export default MovieList;
