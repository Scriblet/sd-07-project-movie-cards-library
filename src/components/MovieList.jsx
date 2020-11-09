import React from 'react';
import PropTypes from 'prop-types';
import MovieCad from './MovieCard';

class MovieList extends React.Component {
  render() {
    const lista = this.props.lista;
    return (
      <div className="movie-list">
        {lista.map((movie, index, movies) => <MovieCad key={movies[index].title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = { lista: PropTypes.arrayOf(PropTypes.objectOf).isRequired };
