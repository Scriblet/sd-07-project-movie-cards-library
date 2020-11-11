/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const { arrayMovies } = this.props.movies;
    return (
      <div className="movie-list">
        { arrayMovies.map((element) => <MovieCard key={element.title} movie={element} />) }
      </div>
    );
  }
}
MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };
export default MovieList;
