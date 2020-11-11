// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        {movies.map((filme) => <MovieCard movie={filme} key={filme.title} />)}
      </div>
    );
  }
  MovieList.propTypes = {
    movies: Proptypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    })).isRequired

export default MovieList;
