import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      movies.map((item) => <MovieCard key={item.title} movie={item} className="movie-list" />)
    );
  }
}
export default MovieList;

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };
MovieList.defaultProps = { movies: [] };
